import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

admin.initializeApp(functions.config().firebase);

exports.hey = functions.region('europe-west1').firestore
    .document('friends/{friendsId}')
    .onCreate(async event => {
        const data = event.data();
        console.log(data);
        const followerId = data.users[0];
        const toFollowId = data.users[1];

        const payload = {
            notification: {
                title: 'You have a new friend request!',
                body: `${followerId} wants to follow you`
            }
        }

        const db = admin.firestore();

        db.collection('devices').where('userId', '==', toFollowId).get()
            .then(function(querySnapshot) {
                querySnapshot.forEach(function(device) {
                    console.log(device.data().token);
                    return admin.messaging().sendToDevice(device.data().token, payload);
                });
            })
            .catch(function(error) {
                console.log("Error getting devices: ", error);
            });

    })