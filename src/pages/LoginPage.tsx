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
            console.log( event,session);
            if (event === "SIGNED_IN" ) {
                //to succeeded URL
                navigate("/success");
            } else if (event === "SIGNED_OUT") {
                //to LoginPage
                navigate("/");
            }
            return data.subscription.unsubscribe()
            

        });

    }, []);



    return (
        <>


            <div className="sm:m-4 p-24" >
                <Auth
                    supabaseClient={supabase}
                    appearance={{ theme: ThemeSupa }}
                    theme="dark"
                    providers={['google', 'facebook',]}
                // onlyThirdPartyProviders
                />
            </div>
        </>
    );
};

export default LoginPage;
