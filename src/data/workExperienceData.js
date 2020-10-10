const workExerperienceData = [
    {
        company: 'Twikit',
        location: 'Antwerp',
        position: 'Angular/Nest.js Developer',
        startDate: '01/04/2019',
        endDate: '01/01/2020',
        temporary: false,
        consultancy: false,
        outline: 'Full stack development in Angular, NestJs (nodejs) and Typescript for multiple projects related to 3D printing.',
        responsabilities: `Development and maintenance of multiple projects in Angular and NestJS
        Analyzing new functionalities
        Hosting docker containers in Amazon AWS`,
        projects: `Setting up the communication between our ordering system and multiple 3d printing supplier APIs so our orders could get printed automatically.
        Development of a material service so we could link our internal materials to 3d printing materials and finishes from suppliers.`,
        skills: ['Angular', 'NestJS', 'NodeJS', 'MongoDB', 'Docker', 'Amazon AWS', 'TypeScript', 'Ngrx', 'Jest']
    },
    {
        company: 'Geo-IT',
        location: 'Antwerp',
        position: 'Vue/.NET Developer',
        startDate: '01/03/2018',
        endDate: '01/04/2019',
        temporary: false,
        consultancy: false,
        outline: 'Front end development in Vue of a new component of the map software of Geo-IT',
        responsabilities: `Development of multiple projects in Vue and .NET Core
        Selecting Vue components for the new application
        Setting up the security (both authentication and authorization) of the applications with Identity Server 4`,
        projects: `Creating a working prototype to present to the clients
        Setup of new projects in Vue and .NET Core
        Security with Identity Server`,
        skills: ['Vue', 'Vuex', '.NET Core', 'Identity Server', 'OpenLayers', 'Vuetify', 'MapGuide', 'PostgreSQL', 'Dapper', 'Entity Framework']
    },
    {
        company: 'ScriptBook',
        location: 'Antwerp',
        position: 'Python Developer',
        startDate: '01/11/2017',
        endDate: '01/02/2018',
        temporary: true,
        consultancy: false,
        outline: `Front- and backend development at a state-of-the-art datascience project about predicting the quality and financial forecast of a movie based on its script.`,
        responsabilities: `Preparing the migration from AngularJS to Angular
        Implementing new functionalities on the frontend 
        Creating and extending rich D3.js diagrams
        Backend development in Python`,
        projects: `Refactoring of the annotation system which is used to analyse movie scripts
        Development of numerous pages and their backend logic such as a page to position the movie script on a graph between other movies based on the predicted chance that it will receive an award.
        The app is used by top tier movie productions companies in Hollywood`,
        skills: ['Python', 'Angular', 'D3.js', 'SQLAlchemy', 'MySQL']
    }
]

export default workExerperienceData