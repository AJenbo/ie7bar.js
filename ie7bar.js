/**
 * IE7Bar (based on IE6Bar)
 * Version:	0.9 (November 22, 2013)
 *
 * THIS PROJECT IS LICENSED UNDER THE MIT LICENSE:
 * http://www.opensource.org/licenses/mit-license.php
 */
function ie7Bar() {
	var txtTitle       = 'We see you are using an older version of Internet Explorer that we no longer support…';
	var txtSubTitle    = 'We strongly recommend that you upgrade to a more modern browser.';
	var txtExplanation = 'The following browsers are supported. <strong>Click on a logo to upgrade.</strong>';
	var imageFolder = 'img/';

	var html = '<div id="ie7-warning"><div id="ie7-warning-container"><img id="ie7-logo" width="64" height="64" src="'
	+ imageFolder + 'ie6-logo.gif" /><div id="ie7-warning-text"><div id="ie7-warning-title">'
	+ txtTitle + '</div> ' + txtSubTitle + '</div><div id="ie7-warning-explanation">'
	+ txtExplanation + '</div><div id="ie7-warning-details">';

	var ua = navigator.userAgent;
	if (ua.indexOf('Windows NT 5.0') > -1) {
		html += '<a href="http://www.filehippo.com/download_firefox/12141/" target="_blank"><img width="78" height="100" src="' + imageFolder + 'browser_firefox.png" /><span>Mozilla Firefox 12</span></a>';
		html += '<a href="http://www.filehippo.com/download_opera/13164/" target="_blank"><img width="73" height="100" src="' + imageFolder + 'browser_opera.png" /><span>Opera 12.02</span></a>';
	} else if (ua.indexOf('Windows 3.') > -1
		|| ua.indexOf('Windows 95') > -1
		|| ua.indexOf('Windows 98') > -1
		|| ua.indexOf('Windows ME') > -1
		|| ua.indexOf('Windows NT;') > -1
		|| ua.indexOf('Windows NT)') > -1
		|| ua.indexOf('Windows NT 3.') > -1
		|| ua.indexOf('Windows NT 4.') > -1
		|| ua.indexOf('SunOS') > -1
		|| ua.indexOf('HP-UX') > -1
	) {
		html += '<a href="http://www.lubuntu.net/" target="_blank"><img width="78" height="100" src="' + imageFolder + 'lubuntu.png" /><span>Lubuntu 12.04</span></a>';
	} else {
		html += '<a href="http://windows.microsoft.com/da-dk/internet-explorer/download-ie" target="_blank"><img width="78" height="100" src="' + imageFolder + 'browser_ie.png" /><span>Internet Explorer 8+</span></a>';
		html += '<a href="http://www.firefox.com/" target="_blank"><img width="78" height="100" src="' + imageFolder + 'browser_firefox.png" /><span>Mozilla Firefox 12+</span></a>';
		html += '<a href="http://chrome.google.com/" target="_blank"><img width="78" height="100" src="' + imageFolder + 'browser_chrome.png" /><span>Google Chrome</span></a>';
		html += '<a href="http://www.opera.com/download/" target="_blank"><img width="73" height="100" src="' + imageFolder + 'browser_opera.png" /><span>Opera 12.02+</span></a>';
	}

	html += '</div></div></div>';
	document.write(html);
}
ie7Bar();

