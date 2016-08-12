
[![npm version](https://badge.fury.io/js/linkedin-public-profile.svg)](https://badge.fury.io/js/linkedin-public-profile)
[![npm](https://img.shields.io/npm/dt/linkedin-public-profile.svg)](https://www.npmjs.com/package/linkedin-public-profile)

[![NPM](https://nodei.co/npm/linkedin-public-profile.png?compact=true)](https://nodei.co/npm/linkedin-public-profile/)
# linkedin-public-profile
Tiny LinkedIn profile scraper for public profiles.

## Installation
in console:
```
npm install linkedin-public-profile
```
and in file:
```javascript
const linkedInProfile = require('linkedin-public-profile');
```

## Usage

just call the module with a public linkedin profile url. It returns a promise which resolves to the profile.
```javascript
'use strict';
/* eslint no-console: 0*/

const linkedInProfile = require('./index');

const url = 'https://de.linkedin.com/in/julianamelung';

// standard usage
linkedInProfile(url).then(profile => {  // chain your logic
  console.log(profile);
});

// With links to similar profiles
linkedInProfile(url, true)
.then(result => {
  console.log(result.profile);  // the requested profile
  console.log(result.links);    // the featured profiles on the page
});

// usage with HTML
const request = require('request-promise');

request(url)									// request with html output
// return the LinkedInProfile promise
.then(html => linkedInProfile(html))
// promise chain
.then(profile => { // chain your logic
  console.log(profile);
});

```

The result looks like:
```json
{
  "url": "https://de.linkedin.com/in/julian-beisenk%C3%B6tter-77038939",
  "name": "Julian Beisenkötter",
  "headline": "Tech Developer bei HitFox Group",
  "location": "Berlin und Umgebung, Deutschland",
  "industry": "Computer-Software",
  "featured_current": "HitFox Group",
  "featured_past": "HitFox Group",
  "featured_education": "DHBW Ravensburg",
  "contacts": "185",
  "positions": [
    {
      "position": "Tech Developer",
      "companyName": "HitFox Group",
      "dates": {
        "from": "Oktober 2015",
        "to": ""
      },
      "locality": "",
      "description": "Product Management, Business Model Innovation, Business Development, Project Management, Prototyping, Technical Feasibility Analysis, Big Data, Financial Services, AdTech, ",
      "current": true
    },
    {
      "position": "CEO",
      "companyName": "eXalted IT UG (haftungsbeschränkt)",
      "dates": {
        "from": "Februar 2011",
        "to": ""
      },
      "locality": "Münster und Umgebung, Deutschland",
      "description": "Business Development, Startup Consultant, Software EvangelistEntrepreneur, Geschäftsführer",
      "current": true
    },
    {
      "position": "Consultant",
      "companyName": "Accenture",
      "dates": {
        "from": "Oktober 2012",
        "to": "September 2015"
      },
      "locality": "",
      "description": "Software Architect; Infrastructure Architect;",
      "current": false
    },
    {
      "position": "Studentische Hilfskraft",
      "companyName": "Duale Hochschule Baden-Württemberg (DHBW)",
      "dates": {
        "from": "Oktober 2012",
        "to": "Dezember 2012"
      },
      "locality": "",
      "description": "Grundlagen der Programmierung",
      "current": false
    },
    {
      "position": "IT-Abteilung",
      "companyName": "Max-Planck Institute for molecular Biomedicine",
      "dates": {
        "from": "Juli 2010",
        "to": "Mai 2012"
      },
      "locality": "",
      "description": "Infrastructure Management",
      "current": false
    },
    {
      "position": "Oracle PL/SQL Consultant",
      "companyName": "Biss Consulting",
      "dates": {
        "from": "Juli 2011",
        "to": "November 2011"
      },
      "locality": "",
      "description": "Database Developer",
      "current": false
    }
  ],
  "skills": [
    "Consulting",
    "Entrepreneurship",
    "Business Model Innovation",
    "Design Thinking",
    "Software Prototyping",
    "Ruby",
    "AngularJS",
    "Ruby on Rails",
    "Mobile Applications",
    "Lean Startup",
    "Web Development",
    "Responsive Web Design",
    "Rapid Prototyping",
    "Linux",
    "Python",
    "Bash",
    "Git",
    "MySQL",
    "PHP",
    "CSS",
    "HTML5",
    "Automobilindustrie",
    "Microservices",
    "Projektmanagement",
    "Datenbanken",
    "SQL",
    "Java",
    "JavaScript",
    "IT-Strategie",
    "Softwareentwicklung",
    "Start-ups",
    "Agile Methoden",
    "Business-Intelligence",
    "Geschäftsprozesse",
    "Veränderungsmanagement",
    "Unternehmensführung",
    "Unternehmensstrategie"
  ],
  "educations": [
    {
      "school": "DHBW Ravensburg",
      "course": "Bachelor of Science (BSc), Economics and Computer science, Business Engineering, ECTS Grade A",
      "dates": {
        "from": "2012",
        "to": "2015"
      },
      "description": "Business Engineering, Consulting, SAP, Java, Projektmanagement, Software-engineering, Requirements-engineering, IT-Management, ERP, CRM, SCMAktivitäten und Verbände: Tutor: Software Entwicklung"
    },
    {
      "school": "Durban University of Technology",
      "course": "Exchange, International Management, Project Management",
      "dates": {
        "from": "2014",
        "to": "2014"
      },
      "description": "Project Management, IT-Management, Financial Accounting, International Management, Contract Management"
    },
    {
      "school": "Fachhochschule Münster",
      "course": "Bachelor of Applied Science (BASc), Wirtschaftsinformatik",
      "dates": {
        "from": "2011",
        "to": "2012"
      },
      "description": "Webentwicklung,Softwareentwicklung, IT-Management, Projektmanagement, IT-Infrastruktur"
    },
    {
      "school": "Hans Böckler Berufskolleg Münster",
      "course": "Abitur, Mathematik und Datenverarbeitungstechnik",
      "dates": {
        "from": "2008",
        "to": "2011"
      },
      "description": "Aktivitäten und Verbände: Schülersprecher"
    },
    {
      "school": "Hans Böckler Berufskolleg Münster",
      "course": "Informationstechnischer Assistent, Elektrotechnik Informatik Wirtschaft",
      "dates": {
        "from": "2008",
        "to": "2011"
      },
      "description": "Netzwerktechnik, Technische Informatik, Datenbanken, Wirtschaft, Projektentmanagement, Grundlagen Softwareentwicklung, Philosophie"
    },
    {
      "school": "Waldorfschule Münster",
      "course": "FOR, Fachoberschulreife",
      "dates": {
        "from": "1997",
        "to": "2008"
      },
      "description": ""
    }
  ]
}
```

## License
The MIT License (MIT)

Copyright (c) 2015 Julian Beisenkötter

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
