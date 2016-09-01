
[![npm version](https://badge.fury.io/js/linkedin-public-profile.svg)](https://badge.fury.io/js/linkedin-public-profile)
[![npm](https://img.shields.io/npm/dt/linkedin-public-profile.svg)](https://www.npmjs.com/package/linkedin-public-profile)

[![NPM](https://nodei.co/npm/linkedin-public-profile.png?compact=true)](https://nodei.co/npm/linkedin-public-profile/)
# linkedin-public-profile
Tiny LinkedIn profile scraper for public profiles.

Scraping LinkedIn Profiles does violate their policies and they may sue you.
Therefore this might be my last version of this tool.
please see: https://www.linkedin.com/help/linkedin/answer/56347


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

const linkedInProfile = require('linkedin-public-profile');

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
   "url":"https://de.linkedin.com/in/julianamelung",
   "contacts":"240",
   "name":"Julian Amelung geb. Beisenkötter",
   "headline":"Software Artist",
   "location":"Berlin und Umgebung, Deutschland",
   "industry":"Computer-Software",
   "picture":"https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAe8AAAAJDYwZGEyYWUyLTVhNWMtNDNjYS1hNGIxLTA0NTVjOWNiNGEyYQ.jpg",
   "featured_current":[  
      "eXalted IT UG (haftungsbeschränkt)"
   ],
   "featured_past":[  
      "FinLeap",
      "HitFox Group",
      "Accenture"
   ],
   "featured_education":[  
      "Duale Hochschule Baden-Württemberg"
   ],
   "positions":[  
      {  
         "position":"CEO",
         "companyName":"eXalted IT UG (haftungsbeschränkt)",
         "from":"Februar 2011",
         "to":"",
         "locality":"Münster und Umgebung, Deutschland",
         "description":"Business Development, Startup Consultant, Software EvangelistEntrepreneur, Geschäftsführer",
         "current":true
      },
      {  
         "position":"Senior Software Architect",
         "companyName":"FinLeap",
         "from":"April 2016",
         "to":"Juli 2016",
         "locality":"Berlin und Umgebung, Deutschland",
         "description":"architect for distributed highly resilient polyglot cloud backends in a fast changing business environment.",
         "current":false
      },
      {  
         "position":"Tech Developer",
         "companyName":"HitFox Group",
         "from":"Oktober 2015",
         "to":"April 2016",
         "locality":"",
         "description":"Product Management, Business Model Innovation, Business Development, Project Management, Prototyping, Technical Feasibility Analysis, Big Data, Financial Services, AdTech,",
         "current":false
      },
      {  
         "position":"Consultant",
         "companyName":"Accenture",
         "from":"Oktober 2012",
         "to":"September 2015",
         "locality":"",
         "description":"Software Architecture; Infrastructure Architecture; Automotive; Cloud Migration; Capacity Management; Support Organisation; Incident Management; Innovation Engineer; ",
         "current":false
      },
      {  
         "position":"Studentische Hilfskraft",
         "companyName":"Duale Hochschule Baden-Württemberg (DHBW) Ravensburg",
         "from":"Oktober 2012",
         "to":"Dezember 2012",
         "locality":"",
         "description":"Tutorium Grundlagen der Programmierung",
         "current":false
      },
      {  
         "position":"IT-Abteilung",
         "companyName":"Max-Planck Institute for molecular Biomedicine",
         "from":"Juli 2010",
         "to":"Mai 2012",
         "locality":"",
         "description":"Infrastructure Management",
         "current":false
      },
      {  
         "position":"Oracle PL/SQL Consultant",
         "companyName":"biss consulting GmbH",
         "from":"Juli 2011",
         "to":"November 2011",
         "locality":"",
         "description":"PLSQL Developer and Database Designer",
         "current":false
      }
   ],
   "skills":[  
      {  
         "name":"Entrepreneurship"
      },
      {  
         "name":"Consulting"
      },
      {  
         "name":"Projektmanagement"
      },
      {  
         "name":"Design Thinking"
      },
      {  
         "name":"Start-ups"
      },
      {  
         "name":"Software Prototyping"
      },
      {  
         "name":"Datenbanken"
      },
      {  
         "name":"Web Development"
      },
      {  
         "name":"Unternehmertum"
      },
      {  
         "name":"Softwareentwicklung"
      },
      {  
         "name":"Ruby"
      },
      {  
         "name":"SQL"
      },
      {  
         "name":"Ruby on Rails"
      },
      {  
         "name":"MySQL"
      },
      {  
         "name":"Microservices"
      },
      {  
         "name":"Java"
      },
      {  
         "name":"JavaScript"
      },
      {  
         "name":"Big Data"
      },
      {  
         "name":"Mobile Applications"
      },
      {  
         "name":"Lean Startup"
      },
      {  
         "name":"Project Management"
      },
      {  
         "name":"Business Model Innovation"
      },
      {  
         "name":"Unternehmensstrategie"
      },
      {  
         "name":"Node.js"
      },
      {  
         "name":"AngularJS"
      },
      {  
         "name":"Software Development"
      },
      {  
         "name":"BigData Architectures"
      },
      {  
         "name":"Web-Entwicklung"
      },
      {  
         "name":"Mobilanwendungen"
      }
   ],
   "educations":[  
      {  
         "school":"Duale Hochschule Baden-Württemberg",
         "course":"Bachelor of Science (BSc), Economics and Computer science, Business Engineering, ECTS Grade ABachelor of Science (BSc), Economics and Computer science, Business Engineering, ECTS Grade A",
         "from":"2012",
         "to":"2015",
         "description":"Business Engineering, Consulting, SAP, Java, Projektmanagement, Software-engineering, Requirements-engineering, IT-Management, ERP, CRM, SCMAktivitäten und Verbände: Tutor: Software Entwicklung"
      },
      {  
         "school":"Durban Institute of Technology",
         "course":"Exchange, International Management, Project ManagementExchange, International Management, Project Management",
         "from":"2014",
         "to":"2014",
         "description":"Project Management, IT-Management, Financial Accounting, International Management, Contract Management"
      },
      {  
         "school":"Fachhochschule Münster",
         "course":"Bachelor of Applied Science (BASc), WirtschaftsinformatikBachelor of Applied Science (BASc), Wirtschaftsinformatik",
         "from":"2011",
         "to":"2012",
         "description":"Webentwicklung,Softwareentwicklung, IT-Management, Projektmanagement, IT-Infrastruktur"
      },
      {  
         "school":"Hans Böckler Berufskolleg Münster",
         "course":"Abitur, Mathematik und Datenverarbeitungstechnik, 1,5Abitur, Mathematik und Datenverarbeitungstechnik, 1,5",
         "from":"2008",
         "to":"2011",
         "description":"Aktivitäten und Verbände: Schülersprecher"
      },
      {  
         "school":"Hans Böckler Berufskolleg Münster",
         "course":"Informationstechnischer Assistent, Elektrotechnik Informatik Wirtschaft, 1,0Informationstechnischer Assistent, Elektrotechnik Informatik Wirtschaft, 1,0",
         "from":"2008",
         "to":"2011",
         "description":"Netzwerktechnik, Technische Informatik, Datenbanken, Wirtschaft, Projektentmanagement, Grundlagen Softwareentwicklung, Philosophie"
      },
      {  
         "school":"Waldorfschule Münster",
         "course":"FOR, Fachoberschulreife, 1,5FOR, Fachoberschulreife, 1,5",
         "from":"1997",
         "to":"2008",
         "description":""
      }
   ]
}
```

## License
The MIT License (MIT)

Copyright (c) 2015 Julian Amelung

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
