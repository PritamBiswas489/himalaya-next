import { getSession } from "next-auth/react";

export const requireAuthentication = async (context) => {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }

  return {
    props: {}, // Add your page props if needed
  };
};

export const alreadyAuthenticated = async (context) => {
    const session = await getSession(context);
  
    if (session) {
      return {
        redirect: {
          destination: '/dashboard',
          permanent: false,
        },
      };
    }

    return {
      props: {}, // Add your page props if needed
    };
  };