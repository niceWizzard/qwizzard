import { getAnalytics } from "firebase/analytics";
import { initializeApp, type FirebaseOptions } from "firebase/app";
import { getAuth } from "firebase/auth";
import { Firestore, getFirestore } from "firebase/firestore";

export default defineNuxtPlugin((nuxtApp) => {
    const config = useRuntimeConfig().app

    const firebaseConfig : FirebaseOptions = {
        apiKey: config.fb.API_KEY,
        projectId: config.fb.FB_PROJECT_ID,
        appId: config.fb.APP_ID,
        measurementId: config.fb.MEASUREMENT_ID
    };

    const app = initializeApp(firebaseConfig)

    const firestore = getFirestore(app)

    nuxtApp.provide("firestore", firestore);

})
