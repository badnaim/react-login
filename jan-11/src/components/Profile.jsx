import React, { useState } from "react";

export default function Profile(prop) {
  const { setLogout } = prop;
  //   const [isLoggedOut, setIsLoggedOut] = useState(true);

  return (
    <div>
      <div>Profile</div>
      <button onClick={() => setLogout(false)}>Log out</button>
    </div>
  );
}
