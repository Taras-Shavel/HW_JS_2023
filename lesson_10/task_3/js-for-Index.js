const json = localStorage.getItem('sessions');
const sessions = json ? JSON.parse(json) : [];

sessions.push({
    date: new Date().toISOString(),
    appCodeName: navigator.appCodeName,
    appVersion: navigator.appVersion,
});

localStorage.setItem('sessions', JSON.stringify(sessions));