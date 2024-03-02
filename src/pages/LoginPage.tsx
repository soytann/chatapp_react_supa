import React from "react";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { supabase } from "../../utils/createClient";

const LoginPage = () => {
    
    return (
        <>
            <h1 className="text-red-200">Login</h1>
            <Auth
                supabaseClient={supabase}
                appearance={{ theme: ThemeSupa }}
                providers={['google', 'facebook',]}
                queryParams={{
                    access_type: 'offline',
                    prompt: 'consent',
                    hd: 'domain.com',
                }}
                // onlyThirdPartyProviders
            />
        </>
    );
};

export default LoginPage;
