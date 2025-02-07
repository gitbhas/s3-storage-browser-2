"use client";

import { useState, useEffect } from "react";
import { generateClient } from "aws-amplify/data";
import type { Schema } from "@/amplify/data/resource";
import "./../app/app.css";
import { Amplify } from "aws-amplify";
import outputs from "@/amplify_outputs.json";
import "@aws-amplify/ui-react/styles.css";
import { Authenticator } from '@aws-amplify/ui-react';
import * as Auth from "aws-amplify/auth";
import { StorageBrowser } from '../components/StorageBrowser';
import { fetchUserAttributes } from "aws-amplify/auth";
Amplify.configure(outputs);

//const client = generateClient<Schema>();

interface UserAttributes {
  email: string;
  email_verified: string;
  preferred_username: string;
  sub: string;
}



export default function App() {

  const [userData, setUserData] = useState<UserAttributes | null>(null);

  async function session() {
    try {
      const data = await Auth.fetchUserAttributes();
      setUserData(data as UserAttributes);
    } catch (error) {
      console.error("Error fetching user attributes:", error);
    }
  }

  useEffect(() => {
    session();
  }, []); // Empty dependency array means this runs once when component mounts //

return (
    <Authenticator hideSignUp={true}>
      {({ signOut, user }) => (
        <main>
          <h1>Hello {userData?.preferred_username}</h1>
          <button onClick={signOut}>Sign out</button>
          {/* <button onClick={attributes}>getatt</button> */}
        {/* StorageBrowser Component */}
        <h2>DDPS Files</h2>
          <StorageBrowser />
        </main>
      )}
    </Authenticator>
  );
}
