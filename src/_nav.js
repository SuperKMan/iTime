export default {
  items: [
    {
      name: "Dashboard",
      url: "/dashboard",
      icon: "icon-speedometer"
    },
    {
      name: "Reset Password",
      icon: "icon-cursor",
      children: [
        {
          name: "Locked Reset",
          url: "/itime/passwordreset",
          icon: "icon-cursor"
        },
        {
          name: "Forgot Reset",
          url: "/itime/forgotpasswordreset",
          icon: "icon-cursor"
        }
      ]
    }
  ]
};
