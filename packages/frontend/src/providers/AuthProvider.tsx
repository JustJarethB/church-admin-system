import { Provider, Session, User } from '@supabase/supabase-js';
import { createContext, useState, useEffect, useContext, PropsWithChildren } from 'react';
import { supabase } from '../api';

type Context = {
    user: User | null;
    session: Session | null;
    signIn: (provider?: Provider) => Promise<unknown>
    signOut: () => Promise<unknown>
};

const AuthContext = createContext<Context>({
    user: null,
    session: null,
    signIn: function (): Promise<unknown> {
        throw new Error('Function not implemented.');
    },
    signOut: function (): Promise<unknown> {
        throw new Error('Function not implemented.');
    }
});

export const useAuth = () => {
    return useContext(AuthContext);
};

const AuthProvider = ({ children }: PropsWithChildren) => {
    const [user, setUser] = useState<User | null>(null);
    const [session, setSession] = useState<Session | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const { data: listener } = supabase.auth.onAuthStateChange(
            (_event, session) => {
                console.log('session onAuthStateChange: ', session);
                setSession(session);
                setUser(session?.user || null);
                setLoading(false);
            }
        );
        return () => {
            listener?.subscription.unsubscribe();
        };
    }, []);

    const signIn = async (provider: Provider = 'github') => {
        const { data, error } = await supabase.auth.signInWithOAuth({
            provider,
            options: { skipBrowserRedirect: false },
        });
        console.log('data: ', data);
        console.log('error: ', error);
        return { data, error };
    };

    const signOut = async () => {
        const { error } = await supabase.auth.signOut();
        console.log('error: ', error);
        if (!error) {
            setUser(null);
            setSession(null);
        }
        return { error };
    };

    return (
        <AuthContext.Provider value={{ user, signIn, signOut, session }}>
            {!loading ? children : `<div>Loading...</div>`}
        </AuthContext.Provider>
    );
};

export default AuthProvider;