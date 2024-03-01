import { createClient } from "@supabase/supabase-js";


export const supabase = createClient(
    "https://coxmxhzthqwzffscyfdu.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNveG14aHp0aHF3emZmc2N5ZmR1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDkyNjg0MDAsImV4cCI6MjAyNDg0NDQwMH0.x-gOaUW2dFLPl1-MU7SdZR-fgbTmex1iTvCQJZPzeZg"
)