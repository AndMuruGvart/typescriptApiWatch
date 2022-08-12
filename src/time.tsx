const time = async () => {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
  
    return fetch("https://worldtimeapi.org/api/timezone/" + tz).then((response) =>
      response.json()
    );
  };
  
  export default time;