import { getFirestore } from "../lib/fabrica.js";

export async function asignarRolCliente(userId) {
  const firestore = getFirestore();
  const daoUsuario = firestore.collection("Usuario");

  const usuarioData = {
    rolIds: ["Cliente"]
  };

  try {
    await daoUsuario.doc(userId).set(usuarioData);
    console.log("Rol de Cliente asignado correctamente al usuario:", userId);
  } catch (error) {
    console.error("Error al asignar el rol de Cliente al usuario:", error);
  }
}