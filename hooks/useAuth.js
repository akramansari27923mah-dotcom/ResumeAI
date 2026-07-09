import { api } from "@/util/axios";
import { useAuths } from "@/contexts/auth.context";
import { useRouter } from "next/navigation";
import { showError, showSuccess } from "@/util/toaster";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "@/lib/firebaseConfig";

export const useAuth = () => {
  const { setLoading, setError, setUser, setUpdate, setGoogleLoading } =
    useAuths();
  const route = useRouter();

  const signup = async (datas) => {
    try {
      setLoading(true);
      const { data } = await api.post("/api/auth/signup", datas);
      if (data?.success) {
        showSuccess("Registered your account");
        route.push("/login");
        setUser(data?.user);
      }
    } catch (err) {
      if (err?.response?.data?.error?.fieldErrors?.password[0]) {
        showError("Password too short");
      }
      setError(err?.response?.data?.error?.fieldErrors?.password[0]);
    } finally {
      setLoading(false);
    }
  };
  const login = async (datas) => {
    try {
      setLoading(true);
      setUpdate(true);
      const { data } = await api.post("/api/auth/login", datas);
      if (data?.success) {
        showSuccess("Logged in successfully");
        route.push("/");
        setUser(data?.user);
      }
    } catch (err) {
      if (err) {
        showError("Wrong credentials");
      }
      setError(err?.response?.data?.error?.fieldErrors?.password[0]);
    } finally {
      setLoading(false);
      setUpdate(false);
    }
  };
  const logout = async () => {
    try {
      await api.post("/api/auth/logout");
      showSuccess("Logout successfully");
      setUpdate(true);
      setUser(null);
    } catch (err) {
      showError(err.message);
    } finally {
      setUpdate(false);
    }
  };

  const loginWithGoogle = async () => {
    try {
      const googleProvider = new GoogleAuthProvider();
      const { user } = await signInWithPopup(auth, googleProvider);
      const { uid, displayName, email, photoURL, } = user;
      const payload = {
        username: displayName,
        googleId: uid,
        email,
        image: photoURL,
      };
      setGoogleLoading(true);
      const { data } = await api.post("/api/auth/google", payload);
      console.log(data.data.user);
      
      if (data.success) {
        setUser(data?.data?.user)
        setUpdate(true);
        showSuccess("Logged in Successed!");
        route.push("/");
      }
    } catch (err) {
      console.error(err?.message);
      console.log(err.response);
    } finally {
      setUpdate(false);
      setGoogleLoading(false);
    }
  };

  return {
    signup,
    login,
    logout,
    loginWithGoogle,
  };
};
