import { firestore } from '../../firebase/firebase';
import { doc, setDoc, getDoc, addDoc, collection, getDocs, updateDoc, deleteDoc } from 'https://www.gstatic.com/firebasejs/9.1.1/firebase-firestore.js';

export const createBillSoat = async (billSoat) => {
  try {
    const doc = {
      mercadoPagoId: billSoat.mercadoPagoId,
      quotation: billSoat.quotation,
      Address: billSoat.Address,
      CityId: billSoat.CityId,
      StateId: billSoat.StateId,
      Celullar: billSoat.Celullar,
      DocumentNumber: billSoat.DocumentNumber,
      DocumentTypeId: billSoat.DocumentTypeId,
      Email: billSoat.Email,
      FirstName: billSoat.FirstName,
      LastName: billSoat.LastName,
    }
    const docRef = await addDoc(collection(firestore, "billSoat"), doc);
  } catch (error) {
    console.error("Error adding document: ", error);
  }
}

export const getBills = async () => {
  try {
    const querySnapshot = await getDocs(collection(firestore, "billSoat"));
    let bills = [];
    querySnapshot.forEach((doc) => {
      bills.push(doc.data());
    });
    return bills;
  } catch (error) {
    console.error("Error getting documents: ", error);
  }
}

export const getBill = async (id) => {
  try {
    const docRef = doc(firestore, "billSoat", id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      console.log("No such document!");
    }
  } catch (error) {
    console.error("Error getting document: ", error);
  }
}

export const updateBill = async (id, billSoat) => {
  try {
    const docRef = doc(firestore, "billSoat", id);
    await updateDoc(docRef, {
      quotation: billSoat.quotation,
      Address: billSoat.Address,
      CityId: billSoat.CityId,
      StateId: billSoat.StateId,
      Celullar: billSoat.Celullar,
      DocumentNumber: billSoat.DocumentNumber,
      DocumentTypeId: billSoat.DocumentTypeId,
      Email: billSoat.Email,
      FirstName: billSoat.FirstName,
      LastName: billSoat.LastName,
    });
  } catch (error) {
    console.error("Error updating document: ", error);
  }
}

export const deleteBill = async (id) => {
  try {
    await deleteDoc(doc(firestore, "billSoat", id));
  } catch (error) {
    console.error("Error removing document: ", error);
  }
}