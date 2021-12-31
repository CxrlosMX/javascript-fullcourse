// JavaScript Location is a built-in Interface (object type) which represents the location (URL) of the object to which it is attached. Both the Window object and the Document object have this property.
console.log("********Object URL(location)********");
console.log(location);
console.log(location.origin);
console.log(location.protocol);
console.log(location.host);
console.log(location.hostname);
console.log(location.port);
console.log(location.href);
console.log(location.hash);
console.log(location.search);
console.log(location.pathname);
//location.reload();

//The JavaScript history object represents an array of URLs visited by the user. By using this object, you can load previous, forward or any particular page.The history object is the window property, so it can be accessed by:
/*
1   forward()	loads the next page.
2	back()	loads the previous page.
3	go()	loads the given page number.
*/
console.log("********Object history********");
console.log(history);
console.log(history.length);
//history.forward(1);
//history.back(3);
//history.go(-3);

//The JavaScript navigator object is used for browser detection. It can be used to get browser information such as appName, appCodeName, userAgent etc.
/*
1	appName	returns the name
2	appVersion	returns the version
3	appCodeName	returns the code name
4	cookieEnabled	returns true if cookie is enabled otherwise false
5	userAgent	returns the user agent
6	language	returns the language. It is supported in Netscape and Firefox only.
7	userLanguage	returns the user language. It is supported in IE only.
8	plugins	returns the plugins. It is supported in Netscape and Firefox only.
9	systemLanguage	returns the system language. It is supported in IE only.
10	mimeTypes[]	returns the array of mime type. It is supported in Netscape and Firefox only.
11	platform	returns the platform e.g. Win32.
12	online	returns true if browser is online otherwise false.
*/
console.log("********Object navegator********");
console.log(navigator);
console.log(navigator.connection);
console.log(navigator.geolocation);
console.log(navigator.mediaDevices);
console.log(navigator.mimeTypes);
console.log(navigator.onLine);
console.log(navigator.serviceWorker);
console.log(navigator.storage);
console.log(navigator.usb);
console.log(navigator.userAgent);




