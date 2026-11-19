
import { supabase } from "./js/supabase.js";

function updateMenu(session) {
  const loggedIn = !!session;

  const authMenu = document.getElementById("authMenu");
  const profileIcon = document.getElementById("profileIcon");
  const heroLogin = document.getElementById("heroLogin");

  authMenu.style.display = loggedIn ? "none" : "flex";
  profileIcon.style.display = loggedIn ? "flex" : "none";
  heroLogin.style.display = loggedIn ? "none" : "inline-block";
}

async function init() {
  const { data, error } = await supabase.auth.getSession();

  if (error) {
    console.error(error.message);
    return;
  }

  updateMenu(data.session);

  supabase.auth.onAuthStateChange((_event, session) => {
    updateMenu(session);
  });
}

init();
