import { supabase } from "../../supabase/supabase";

export default async function GetEventos() {
  try {
    let { data: eventos, error } = await supabase
      .from('events')
      .select('*, usuario:event_author(username)');

    if (error) {
      throw error;
    }
    return eventos;
  } catch (error) {
    console.error("Error al obtener los eventos:", error.message);
    return {};
  }
}