import { supabase } from "../../../supabase/supabase";

export default async function CountEvents() {
  let count;
  try {
    const { count: totalCount } = await supabase
      .from("events")
      .select("id", { count: "exact", head: true });

    
    count = totalCount;
  } catch (error) {
    console.error(error.message);
    return null;
  }
  return count;
}