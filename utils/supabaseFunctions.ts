import { useState } from "react";
import { supabase } from "../utils/createClient";

export const getAllUsers = async () => {
	const users = await supabase.from("users").select("*");
	return users.data;
};

export const getMessages = async () => {
	const messages = await supabase.from("messages").select()
	.order("created_at")

	return messages.data;
};
export const getPhrases = async () => {
	const messages = await supabase.from("phrases").select()
	.order("created_at")

	return messages.data;
};


