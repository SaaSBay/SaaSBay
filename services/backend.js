// saveVendorApplication.js
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, Timestamp } from "firebase/firestore";

// TODO: Replace with your Firebase project config!
const firebaseConfig = {
   apiKey: "AIzaSyCMWgiDQWkT6SqrYnthrM96GXAl3zrl0uo",

  authDomain: "saasbay.firebaseapp.com",

  projectId: "saasbay",

  storageBucket: "saasbay.firebasestorage.app",

  messagingSenderId: "43607687238",

  appId: "1:43607687238:web:2fc8f7feb9e2d8896e8a47",

  measurementId: "G-1W3KLFSWTY"

};

// Initialize Firebase (ensure this runs only once in your app)
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// data: the vendorForm object from your React state
export async function saveVendorApplication(data) {
  try {
    const docRef = await addDoc(collection(db, "vendorApplications"), {
      name: data.name,
      designation: data.designation,
      email: data.email,
      contactNumber: data.contactNumber,
      companyName: data.companyName,
      category: data.category,
      plan: data.plan,
      gstNo: data.gstNo || "", // Optional field
      createdAt: Timestamp.now(),
      status: "pending", // You can set an initial status
    });
    return { success: true, id: docRef.id };
  } catch (error) {
    // Handle error as needed in your app
    return { success: false, error };
  }
}

// Save contact form data to Firestore
export async function saveContactMessage(data) {
  try {
    const docRef = await addDoc(collection(db, "Contacts"), {
      name: data.name,
      email: data.email,
      intent: data.intent,
      message: data.message,
      createdAt: Timestamp.now(),
      status: "new", // You can use this for tracking
    });
    return { success: true, id: docRef.id };
  } catch (error) {
    return { success: false, error };
  }
}
