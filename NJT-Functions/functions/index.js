const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const path = require('path');
const fs = require('fs')

const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
 
exports.helloWorld = functions.https.onRequest((request, response) => {
 response.send("Hello World");
 
});


exports.host = functions.https.onRequest((req, res) => {
	const userAgent = req.headers['user-agent'].toLowerCase();
	let indexHTML = fs.readFileSync('./hosting/index.html').toString();
	const path = req.path ? req.path.split('/') : req.path;
	const ogPlaceholder = '<meta name="functions-insert-dynamic-og">';
	const metaPlaceholder = '<meta name="functions-insert-dynamic-meta">';

	const isBot = userAgent.includes('googlebot') ||
		userAgent.includes('yahoou') ||
		userAgent.includes('bingbot') ||
		userAgent.includes('baiduspider') ||
		userAgent.includes('yandex') ||
		userAgent.includes('yeti') ||
		userAgent.includes('yodaobot') ||
		userAgent.includes('gigabot') ||
		userAgent.includes('ia_archiver') ||
		userAgent.includes('facebookexternalhit') ||
		userAgent.includes('twitterbot') ||
		userAgent.includes('developers.google.com') ? true : false;

	if (isBot && (path && path.length > 1 && path[1] === 'organisation')) {
		const slug = path[2];
		admin.database().ref(`published/${slug}`).once('value').then(snapshot => {
			const org = snapshot.val();
			if (org) {
				org.slug = slug;
				return res.status(200).send(indexHTML);
			}
			indexHTML = indexHTML.replace(metaPlaceholder, getMeta(org));
			indexHTML = indexHTML.replace(ogPlaceholder, getOpenGraph(org));
			return res.status(200).send(indexHTML);
		}).catch(err =>{
            console.error(err);
            return;
        });
		return;
	}

	// optional - turn on caching: res.set('Cache-Control', 'public, max-age=300, s-maxage=600');
	indexHTML = indexHTML.replace(metaPlaceholder, getMeta());
	indexHTML = indexHTML.replace(ogPlaceholder, getOpenGraph());
	res.status(200).send(indexHTML);
});

let og = `<meta property="fb:app_id" content="921373517372"/>`;
const defaultDesc = 'Sell Surplus and Used Industrial Automation Equipment';
const defaultTitle = 'NJT AUTOMATION SALVAGE - MILWAUKEE WI';
const defaultLogo = 'https://njtautomation.com/static/media/parts.84e59de7.jpg';

const getOpenGraph = (org) => {
	og = `<meta property="fb:app_id" content="921373517372"/>`;
	og += `<meta property="og:type" content="website" />`;

	if (!org) {
		og += `<meta property="og:title" content="${defaultTitle}" />`;
		og += `<meta property="og:description" content="${defaultDesc}" />`;
		og += `<meta property="og:image" content="${defaultLogo}" />`;
		og += `<meta property="og:url" content="https://njtautomation.com" />`;
		og += '<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />';
		og += '<meta name=viewport content="width=device-width, initial-scale=1"></meta>';
		og += '<META NAME="geo.position" CONTENT="43.0389; 87.9065">';
		og += '<META NAME="geo.placename" CONTENT="Milwaukee">';
	
		return og;
	}
	og += `<meta property="og:title" content="${org.name}" />`;
	og += `<meta property="og:description" content="${org.desc || defDesc}" />`;
	og += `<meta property="og:image" content="${org.logo_url || defLogo}" />`;
	og += `<meta property="og:url" content="https://njtautomation.com/organisation/${org.slug}" />`;
	return og;
};

const getMeta = (org) => {
	og += `<meta property="og:title" content="${defaultTitle}" />`;
		og += `<meta property="og:description" content="${defaultDesc}" />`;
		og += `<meta property="og:image" content="${defaultLogo}" />`;
		og += `<meta property="og:url" content="https://njtautomation.com" />`;
		og += '<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />';
		og += '<meta name=viewport content="width=device-width, initial-scale=1"></meta>';
		og += '<META NAME="geo.position" CONTENT="43.0389; 87.9065">';
		og += '<META NAME="geo.placename" CONTENT="Milwaukee">';
	return og;
};

