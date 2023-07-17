import supabase from "./supabase";

export async function getNotes() {
  const { data, error } = await supabase.from("notes").select("*");

  if (error) {
    console.error(error);
    throw new Error("Notes could not be loaded");
  }

  return data;
}

export async function deleteNotes(id) {
  const { data, error } = await supabase.from("notes").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Project could not be deleted");
  }

  return data;
}
