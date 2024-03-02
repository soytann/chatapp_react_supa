import { supabase } from "../utils/createClient";

export const getAllUsers = async() => {
    const users = await supabase
        .from("users")
        .select("*");
    return users.data;
}