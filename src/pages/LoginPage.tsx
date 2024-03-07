import React, { useEffect } from "react";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { supabase } from "../../utils/createClient";
import { useNavigate } from "react-router-dom";
import { Button } from "@material-tailwind/react";

const LoginPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const { data } = supabase.auth.onAuthStateChange((event, session) => {
            console.log(event, session);
            if (event === "SIGNED_IN") {
                //to succeeded URL
                navigate("/success");
            } else if (event !== "SIGNED_IN") {
                //to LoginPage
                navigate("/");
            }
            // data.subscription.unsubscribe()
        });

    }, []);

    return (
        <>
            <Button>あはは</Button>
            <h1 className="text-red-200">Login</h1>
            <Auth
                supabaseClient={supabase}
                appearance={{ theme: ThemeSupa }}
                theme="dark"
                providers={['google', 'facebook',]}

            // onlyThirdPartyProviders
            />
        </>
    );
};

export default LoginPage;
