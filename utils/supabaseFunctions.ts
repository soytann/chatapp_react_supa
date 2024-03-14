import { useState } from "react";
import { supabase } from "../utils/createClient";

export const getAllUsers = async () => {
	const users = await supabase.from("users").select("*");
	return users.data;
};

export const getMessages = async () => {
	const messages = await supabase.from("messages").select("*")
	.order("created_at")

	return messages.data;
};
export const getPhrases = async () => {
	const phrases = await supabase.from("phrases").select("*")
	.order("created_at")

	return phrases.data;
};
export const getSelectedPhrases = async (id) => {
	const selectedPhrase = await supabase
		.from("phrases")
		.select("*")
		.eq("id",id)
	// .order("created_at")

	return selectedPhrase.data;
};
export const searchedPhrases = async (value: string) => {
	const searchedPhrase = await supabase
		.from("phrases")
		.select()
		.like("phrase", value)

	return searchedPhrase.data;
};


