import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage, ref, getDownloadURL, listAll } from "firebase/storage";
// import { collection, addDoc } from "firebase/firestore"; 

const firebaseConfig = {
  apiKey: "AIzaSyB6HN233smzZv1phyZckLpZGTXp3TUCDjQ",
  authDomain: "metaharm-auth-20868.firebaseapp.com",
  projectId: "metaharm-auth-20868",
  storageBucket: "metaharm-auth-20868.appspot.com",
  messagingSenderId: "555483562716",
  appId: "1:555483562716:web:a4dec9cd9c971df2e0aa19"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
const storage = getStorage();





// Create a reference under which you want to list
const listRef = ref(storage, 'food and drink');

// Find all the prefixes and items.
export const getALLImg = () => {
  listAll(listRef)
    .then((res) => {
      res.items.forEach((itemRef, i) => {
        console.log(itemRef.name.split('.')[0]);
        getImgDownloadUrl(i, itemRef);
      });
    }).catch((error) => {
      console.log(error.message);
    });
}


const getImgDownloadUrl = (i, img) => {
  getDownloadURL(ref(storage, img))
    .then((url) => {
      // console.log(i);
      // console.log(url);
    })
    .catch((error) => {
      alert(error.message);
    });
}



// const imgProperties = [
//   {
//     imgName: 'food1.png',
//     imgUrl: 'https://firebasestorage.googleapis.com/v0/b/metaharm-auth-20868.appspot.com/o/food%20and%20drink%2Ffood2.png?alt=media&token=55541865-e27e-4d91-a2fb-de2936288346'
//   },
//   {
//     imgName: 'food12.png',
//     imgUrl: 'https://firebasestorage.googleapis.com/v0/b/metaharm-auth-20868.appspot.com/o/food%20and%20drink%2Ffood1.png?alt=media&token=9189f491-f26f-4eaa-982e-f19f9c616e25'
//   },
//   {
//     imgName: 'food3.png',
//     imgUrl: 'https://firebasestorage.googleapis.com/v0/b/metaharm-auth-20868.appspot.com/o/food%20and%20drink%2Ffood3.png?alt=media&token=37e71522-a11d-485c-8d39-9610656f1c44'
//   },
//   {
//     imgName: 'food4.png',
//     imgUrl: 'https://firebasestorage.googleapis.com/v0/b/metaharm-auth-20868.appspot.com/o/food%20and%20drink%2Ffood4.png?alt=media&token=5c7420c5-93d3-426c-869f-86b7e29d6c65'
//   },
//   {
//     imgName: 'food5.png',
//     imgUrl: 'https://firebasestorage.googleapis.com/v0/b/metaharm-auth-20868.appspot.com/o/food%20and%20drink%2Ffood5.png?alt=media&token=950ec231-0076-4ea6-8ef8-ad5d18d42f43'
//   },
//   {
//     imgName: 'food6.png',
//     imgUrl: 'https://firebasestorage.googleapis.com/v0/b/metaharm-auth-20868.appspot.com/o/food%20and%20drink%2Ffood6.png?alt=media&token=6f3e9c4c-0e5c-434e-a6e4-f06cb4b5374d'
//   },
//   {
//     imgName: 'food7.png',
//     imgUrl: 'https://firebasestorage.googleapis.com/v0/b/metaharm-auth-20868.appspot.com/o/food%20and%20drink%2Ffood7.png?alt=media&token=d16dd20e-0186-44e8-8341-53e4e099cb3b'
//   },
//   {
//     imgName: 'food8.png',
//     imgUrl: 'https://firebasestorage.googleapis.com/v0/b/metaharm-auth-20868.appspot.com/o/food%20and%20drink%2Ffood8.png?alt=media&token=ad795954-f8b6-4a64-ac2a-254464d8bd85'
//   },
//   {
//     imgName: 'food9.png',
//     imgUrl: 'https://firebasestorage.googleapis.com/v0/b/metaharm-auth-20868.appspot.com/o/food%20and%20drink%2Ffood9.png?alt=media&token=e36b9af0-b988-4713-b4b3-a00a453812d4'
//   },
//   {
//     imgName: 'food10.png',
//     imgUrl: 'https://firebasestorage.googleapis.com/v0/b/metaharm-auth-20868.appspot.com/o/food%20and%20drink%2Ffood10.png?alt=media&token=8a95b737-567f-412b-83d9-f0b193e16e27'
//   },
//   {
//     imgName: 'food11.png',
//     imgUrl: 'https://firebasestorage.googleapis.com/v0/b/metaharm-auth-20868.appspot.com/o/food%20and%20drink%2Ffood11.png?alt=media&token=72ec13a2-1288-4084-b3e2-5e3cc68ed84d'
//   },
//   {
//     imgName: 'food12.png',
//     imgUrl: 'https://firebasestorage.googleapis.com/v0/b/metaharm-auth-20868.appspot.com/o/food%20and%20drink%2Ffood12.png?alt=media&token=b5404107-04ac-4af6-bd0c-59a362f956d7'
//   },
//   {
//     imgName: 'food13.png',
//     imgUrl: 'https://firebasestorage.googleapis.com/v0/b/metaharm-auth-20868.appspot.com/o/food%20and%20drink%2Ffood13.png?alt=media&token=a4d22211-d043-4593-b3ab-53b1cbe5f81f'
//   },
//   {
//     imgName: 'food14.png',
//     imgUrl: 'https://firebasestorage.googleapis.com/v0/b/metaharm-auth-20868.appspot.com/o/food%20and%20drink%2Ffood14.png?alt=media&token=12b12c37-cdb1-4f8f-ad1e-fa14ebb4a225'
//   },
//   {
//     imgName: 'food15.png',
//     imgUrl: 'https://firebasestorage.googleapis.com/v0/b/metaharm-auth-20868.appspot.com/o/food%20and%20drink%2Ffood15.png?alt=media&token=087bff26-bf0c-4dbb-b580-60b0748ac948'
//   },
//   {
//     imgName: 'food16.png',
//     imgUrl: 'https://firebasestorage.googleapis.com/v0/b/metaharm-auth-20868.appspot.com/o/food%20and%20drink%2Ffood16.png?alt=media&token=5949c9b7-53bb-49cf-a3a4-5c4967b15f1b'
//   },
//   {
//     imgName: 'food17.png',
//     imgUrl: 'https://firebasestorage.googleapis.com/v0/b/metaharm-auth-20868.appspot.com/o/food%20and%20drink%2Ffood17.png?alt=media&token=6d70e9f8-2d15-4afd-b057-b4b899228e64'
//   },
//   {
//     imgName: 'food18.png',
//     imgUrl: 'https://firebasestorage.googleapis.com/v0/b/metaharm-auth-20868.appspot.com/o/food%20and%20drink%2Ffood18.png?alt=media&token=bfd9ce79-6a88-4def-92ca-2ec136342146'
//   },
//   {
//     imgName: 'food19.png',
//     imgUrl: 'https://firebasestorage.googleapis.com/v0/b/metaharm-auth-20868.appspot.com/o/food%20and%20drink%2Ffood19.png?alt=media&token=7d1337c8-0195-4800-a7e8-8bff0b8da78f'
//   },
//   {
//     imgName: 'food20.png',
//     imgUrl: 'https://firebasestorage.googleapis.com/v0/b/metaharm-auth-20868.appspot.com/o/food%20and%20drink%2Ffood20.png?alt=media&token=437fecb1-7b67-4d08-b8d7-5d660eddd8fc'
//   },
//   {
//     imgName: 'food21.png',
//     imgUrl: 'https://firebasestorage.googleapis.com/v0/b/metaharm-auth-20868.appspot.com/o/food%20and%20drink%2Ffood21.png?alt=media&token=7f9d3744-eca5-4eaa-8dd9-a39ed045f0ee'
//   },
//   {
//     imgName: 'food22.png',
//     imgUrl: 'https://firebasestorage.googleapis.com/v0/b/metaharm-auth-20868.appspot.com/o/food%20and%20drink%2Ffood22.png?alt=media&token=6c28df9c-12e4-4b5b-867a-85873d772f1d'
//   },
//   {
//     imgName: 'food23.png',
//     imgUrl: 'https://firebasestorage.googleapis.com/v0/b/metaharm-auth-20868.appspot.com/o/food%20and%20drink%2Ffood23.png?alt=media&token=792ddc86-2e6b-43cb-a664-997b97e13fcd'
//   },
//   {
//     imgName: 'food24.png',
//     imgUrl: 'https://firebasestorage.googleapis.com/v0/b/metaharm-auth-20868.appspot.com/o/food%20and%20drink%2Ffood24.png?alt=media&token=e5405f5b-4a4c-4c4d-8fbc-a4f2c6db672a'
//   },
//   {
//     imgName: 'food25.png',
//     imgUrl: 'https://firebasestorage.googleapis.com/v0/b/metaharm-auth-20868.appspot.com/o/food%20and%20drink%2Ffood25.png?alt=media&token=23d41535-6169-4d3b-8609-53ccce7273dd'
//   },
//   {
//     imgName: 'food26.png',
//     imgUrl: 'https://firebasestorage.googleapis.com/v0/b/metaharm-auth-20868.appspot.com/o/food%20and%20drink%2Ffood26.png?alt=media&token=0d04fe49-fa44-49ce-91df-ee6713f907ca'
//   },
//   {
//     imgName: 'food27.png',
//     imgUrl: 'https://firebasestorage.googleapis.com/v0/b/metaharm-auth-20868.appspot.com/o/food%20and%20drink%2Ffood27.png?alt=media&token=12b85e88-6d3d-46d6-9a07-7cee621d1743'
//   },
//   {
//     imgName: 'food28.png',
//     imgUrl: 'https://firebasestorage.googleapis.com/v0/b/metaharm-auth-20868.appspot.com/o/food%20and%20drink%2Ffood28.png?alt=media&token=a73e4c3f-3616-4ee4-8ecd-8a426c34efeb'
//   },
//   {
//     imgName: 'food29.png',
//     imgUrl: 'https://firebasestorage.googleapis.com/v0/b/metaharm-auth-20868.appspot.com/o/food%20and%20drink%2Ffood29.png?alt=media&token=24d1eb5c-d53c-41e0-add5-289930d5b271'
//   },
//   {
//     imgName: 'food30.png',
//     imgUrl: 'https://firebasestorage.googleapis.com/v0/b/metaharm-auth-20868.appspot.com/o/food%20and%20drink%2Ffood30.png?alt=media&token=ce0f2ff5-6371-44b0-90d5-b40c38014259'
//   },
//   {
//     imgName: 'food31.png',
//     imgUrl: 'https://firebasestorage.googleapis.com/v0/b/metaharm-auth-20868.appspot.com/o/food%20and%20drink%2Ffood31.png?alt=media&token=74d9f850-4776-4af4-a235-c3b3744e3225'
//   },
//   {
//     imgName: 'food32.png',
//     imgUrl: 'https://firebasestorage.googleapis.com/v0/b/metaharm-auth-20868.appspot.com/o/food%20and%20drink%2Ffood32.png?alt=media&token=31372e5d-3244-4038-b3d0-4d65cd6ba650'
//   },
//   {
//     imgName: 'food33.png',
//     imgUrl: 'https://firebasestorage.googleapis.com/v0/b/metaharm-auth-20868.appspot.com/o/food%20and%20drink%2Ffood1.png?alt=media&token=9189f491-f26f-4eaa-982e-f19f9c616e25'
//   },
// ];

// export const getAllFile = () => {
//   for(let i = 1; i <= 33; i++){
//     getDownloadURL(ref(storage, `food and drink/food${i}.png`))
//     .then((url) => {
//       console.log(i);
//       console.log(url);
//       imgProperties.push({imgURL: url});
//     })
//     .catch((error) => {
//       alert(error.message);
//     });
//   }
// }






// export const addDocToFirestore = async () => {
//   try {
//     const docRef = await addDoc(collection(db, "food and drink/"), {
//       first: "Ada",
//       last: "Lovelace",
//       born: 1815
//     });
//     console.log("Document written with ID: ", docRef.id);
//   } catch (e) {
//     console.error("Error adding document: ", e);
//   }
// }

