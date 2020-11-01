import CategoryType from 'enums/CategoryType'

const skillData = [
    //Professional Experience
    //Programming language
    {
        name: '.NET (C#)',
        months: 108,
        professional: true,
        legacy: false,
        category: CategoryType.PROGRAMMING_SKILL
    },
    {
        name: 'WPF',
        months: 30,
        professional: true,
        legacy: false,
        category: CategoryType.PROGRAMMING_SKILL
    },
    {
        name: 'MVVM',
        months: 30,
        professional: true,
        legacy: false,
        category: CategoryType.PROGRAMMING_SKILL
    },
    {
        name: 'Angular',
        months: 9.5,
        professional: true,
        legacy: false,
        category: CategoryType.PROGRAMMING_SKILL
    },
    {
        name: 'Ngrx',
        months: 9.5,
        professional: true,
        legacy: false,
        category: CategoryType.PROGRAMMING_SKILL
    },
    {
        name: 'AngularJS',
        months: 5.5,
        professional: true,
        legacy: true,
        category: CategoryType.PROGRAMMING_SKILL
    },
    {
        name: 'Javascript',
        months: 48,
        professional: true,
        legacy: true,
        category: CategoryType.PROGRAMMING_SKILL
    },
    {
        name: 'jQuery',
        months: 36,
        professional: true,
        legacy: true,
        category: CategoryType.PROGRAMMING_SKILL
    },
    {
        name: 'Rest API',
        months: 36,
        professional: true,
        legacy: false,
        category: CategoryType.PROGRAMMING_SKILL
    },
    {
        name: 'WCF',
        months: 48,
        professional: true,
        legacy: true,
        category: CategoryType.PROGRAMMING_SKILL
    },
    {
        name: 'JSON',
        months: 36,
        professional: true,
        legacy: false,
        category: CategoryType.PROGRAMMING_SKILL
    },
    {
        name: '.NET Core',
        months: 3,
        professional: true,
        legacy: false,
        category: CategoryType.PROGRAMMING_SKILL
    },
    {
        name: 'XAML',
        months: 30,
        professional: true,
        legacy: false,
        category: CategoryType.PROGRAMMING_SKILL
    },
    {
        name: 'nUnit',
        months: 36,
        professional: true,
        legacy: false,
        category: CategoryType.PROGRAMMING_SKILL
    },
    {
        name: 'VueJS',
        months: 8,
        professional: true,
        legacy: false,
        category: CategoryType.PROGRAMMING_SKILL
    },
    {
        name: 'NestJS (node.js)',
        months: 8,
        professional: true,
        legacy: false,
        category: CategoryType.PROGRAMMING_SKILL
    },
    {
        name: 'MongoDB',
        months: 12,
        professional: true,
        legacy: false,
        category: CategoryType.PROGRAMMING_SKILL
    },
    {
        name: 'Python',
        months: 3,
        professional: true,
        legacy: false,
        category: CategoryType.PROGRAMMING_SKILL
    },
    {
        name: 'ASP.NET MVC',
        months: 24,
        professional: true,
        legacy: false,
        category: CategoryType.PROGRAMMING_SKILL
    },
    {
        name: 'Entity Framework',
        months: 30,
        professional: true,
        legacy: false,
        category: CategoryType.PROGRAMMING_SKILL
    },
    {
        name: 'nHibernate',
        months: 18,
        professional: true,
        legacy: false,
        category: CategoryType.PROGRAMMING_SKILL
    },
    {
        name: 'SQLAlchemy',
        months: 3,
        professional: true,
        legacy: false,
        category: CategoryType.PROGRAMMING_SKILL
    },
    {
        name: 'DevExpress XPO',
        months: 1.5,
        professional: true,
        legacy: false,
        category: CategoryType.PROGRAMMING_SKILL
    },
    {
        name: 'Webservices',
        months: 60,
        professional: true,
        legacy: false,
        category: CategoryType.PROGRAMMING_SKILL
    },
    {
        name: 'CSS',
        months: 72,
        professional: true,
        legacy: false,
        category: CategoryType.PROGRAMMING_SKILL
    },
    {
        name: 'HTML',
        months: 72,
        professional: true,
        legacy: false,
        category: CategoryType.PROGRAMMING_SKILL
    },
    {
        name: 'D3.js',
        months: 3,
        professional: true,
        legacy: false,
        category: CategoryType.PROGRAMMING_SKILL
    },
    {
        name: 'Dapper',
        months: 2,
        professional: true,
        legacy: false,
        category: CategoryType.PROGRAMMING_SKILL
    },
    {
        name: 'LINQ',
        months: 48,
        professional: true,
        legacy: false,
        category: CategoryType.PROGRAMMING_SKILL
    },
    {
        name: 'MS Test',
        months: 48,
        professional: true,
        legacy: false,
        category: CategoryType.PROGRAMMING_SKILL
    },
    {
        name: 'Vuetify',
        months: 1,
        professional: true,
        legacy: false,
        category: CategoryType.PROGRAMMING_SKILL
    },
    {
        name: 'Docker',
        months: 8,
        professional: true,
        legacy: false,
        category: CategoryType.PROGRAMMING_SKILL
    },
    {
        name: 'Typescript',
        months: 12,
        professional: true,
        legacy: false,
        category: CategoryType.PROGRAMMING_SKILL
    },
    {
        name: 'RabbitMQ',
        months: 2,
        professional: true,
        legacy: false,
        category: CategoryType.PROGRAMMING_SKILL
    },
    // Methodologies
    {
        name: 'Scrum/Agile',
        months: 2,
        professional: true,
        legacy: false,
        category: CategoryType.METHODOLOGY
    },
    {
        name: 'OO Development',
        months: 120,
        professional: true,
        legacy: false,
        category: CategoryType.METHODOLOGY
    },
    {
        name: 'TDD',
        months: 30,
        professional: true,
        legacy: false,
        category: CategoryType.METHODOLOGY
    },
    {
        name: 'UML Design',
        months: 12,
        professional: true,
        legacy: false,
        category: CategoryType.METHODOLOGY
    },
    {
        name: 'DDD',
        months: 12,
        professional: true,
        legacy: false,
        category: CategoryType.METHODOLOGY
    },
    {
        name: 'SOA',
        months: 12,
        professional: true,
        legacy: false,
        category: CategoryType.METHODOLOGY
    },
    //Software
    {
        name: 'Visual Studio .NET',
        months: 96,
        professional: true,
        legacy: false,
        category: CategoryType.SOFTWARE
    },
    {
        name: 'Visual Studio Code',
        months: 12,
        professional: true,
        legacy: false,
        category: CategoryType.SOFTWARE
    },
    {
        name: 'PyCharm',
        months: 3,
        professional: true,
        legacy: false,
        category: CategoryType.SOFTWARE
    },
    {
        name: 'Microsoft Office',
        months: 60,
        professional: true,
        legacy: false,
        category: CategoryType.SOFTWARE
    },
    {
        name: 'OpenOffice',
        months: 3,
        professional: true,
        legacy: false,
        category: CategoryType.SOFTWARE
    },
    {
        name: 'Rational Rose',
        months: 9,
        professional: true,
        legacy: true,
        category: CategoryType.SOFTWARE
    },
    {
        name: 'Redgate SQL Compare',
        months: 1,
        professional: true,
        legacy: false,
        category: CategoryType.SOFTWARE
    },
    {
        name: 'Kentico CMS',
        months: 12,
        professional: true,
        legacy: true,
        category: CategoryType.SOFTWARE
    },
    {
        name: 'SQL Server',
        months: 60,
        professional: true,
        legacy: false,
        category: CategoryType.SOFTWARE
    },
    {
        name: 'MySQL',
        months: 3,
        professional: true,
        legacy: false,
        category: CategoryType.SOFTWARE
    },
    {
        name: 'PostgreSQL',
        months: 9,
        professional: true,
        legacy: false,
        category: CategoryType.SOFTWARE
    },
    {
        name: 'Identity Server',
        months: 3,
        professional: true,
        legacy: false,
        category: CategoryType.SOFTWARE
    },
    {
        name: 'PHPStorm',
        months: 8,
        professional: true,
        legacy: false,
        category: CategoryType.SOFTWARE
    },
    {
        name: 'Git',
        months: 24,
        professional: true,
        legacy: false,
        category: CategoryType.SOFTWARE
    },
    {
        name: 'Visual SVN',
        months: 72,
        professional: true,
        legacy: false,
        category: CategoryType.SOFTWARE
    },
    {
        name: 'Team Foundation Server',
        months: 7,
        professional: true,
        legacy: false,
        category: CategoryType.SOFTWARE
    },
    {
        name: 'Visual SourceSafe',
        months: 24,
        professional: true,
        legacy: true,
        category: CategoryType.SOFTWARE
    },
    {
        name: 'Windows',
        months: 132,
        professional: true,
        legacy: false,
        category: CategoryType.SOFTWARE
    },
    {
        name: 'Ubuntu',
        months: 3,
        professional: true,
        legacy: false,
        category: CategoryType.SOFTWARE
    },
    {
        name: 'Telerik Controls',
        months: 18,
        professional: true,
        legacy: false,
        category: CategoryType.SOFTWARE
    },
    {
        name: 'Mercury Loadrunner',
        months: 3,
        professional: true,
        legacy: true,
        category: CategoryType.SOFTWARE
    },
    {
        name: 'Oracle',
        months: 24,
        professional: true,
        legacy: false,
        category: CategoryType.SOFTWARE
    },
    {
        name: 'Firebird',
        months: 1.5,
        professional: true,
        legacy: false,
        category: CategoryType.SOFTWARE
    },
    {
        name: 'MapGuide',
        months: 9,
        professional: true,
        legacy: false,
        category: CategoryType.SOFTWARE
    },
    {
        name: 'PgAdmin',
        months: 9,
        professional: true,
        legacy: false,
        category: CategoryType.SOFTWARE
    },
    {
        name: 'Docker For Windows',
        months: 8,
        professional: true,
        legacy: false,
        category: CategoryType.SOFTWARE
    },
    {
        name: 'Amazon AWS',
        months: 8,
        professional: true,
        legacy: false,
        category: CategoryType.SOFTWARE
    },
    {
        name: 'Jira',
        months: 8,
        professional: true,
        legacy: false,
        category: CategoryType.SOFTWARE
    },
    // Self taught
    {
        name: 'Java',
        months: 0,
        professional: false,
        legacy: false,
        handson: true,
        category: CategoryType.PROGRAMMING_SKILL
    },
    {
        name: 'Spring',
        months: 0,
        professional: false,
        legacy: false,
        handson: true,
        category: CategoryType.PROGRAMMING_SKILL
    },
    {
        name: 'Spring Boot',
        months: 0,
        professional: false,
        legacy: false,
        handson: true,
        category: CategoryType.PROGRAMMING_SKILL
    },
    {
        name: 'Project Lombok',
        months: 0,
        professional: false,
        legacy: false,
        handson: true,
        category: CategoryType.PROGRAMMING_SKILL
    },
    {
        name: 'ActiveMQ',
        months: 0,
        professional: false,
        legacy: false,
        handson: false,
        category: CategoryType.PROGRAMMING_SKILL
    },
    {
        name: 'Thymeleaf',
        months: 0,
        professional: false,
        legacy: false,
        handson: true,
        category: CategoryType.PROGRAMMING_SKILL
    },
    {
        name: 'IntelliJ IDEA',
        months: 0,
        professional: false,
        legacy: false,
        handson: true,
        category: CategoryType.SOFTWARE
    },
    {
        name: 'Mockito',
        months: 0,
        professional: false,
        legacy: false,
        handson: true,
        category: CategoryType.PROGRAMMING_SKILL
    },
    {
        name: 'Xamarin',
        months: 0,
        professional: false,
        legacy: false,
        handson: true,
        category: CategoryType.PROGRAMMING_SKILL
    },
    {
        name: 'Node.js',
        months: 0,
        professional: false,
        legacy: false,
        handson: true,
        category: CategoryType.PROGRAMMING_SKILL
    },
    {
        name: 'Kubernates',
        months: 0,
        professional: false,
        legacy: false,
        handson: false,
        category: CategoryType.PROGRAMMING_SKILL
    },
    {
        name: 'React',
        months: 0,
        professional: false,
        legacy: false,
        handson: true,
        category: CategoryType.PROGRAMMING_SKILL
    },
    {
        name: 'React Native',
        months: 0,
        professional: false,
        legacy: false,
        handson: false,
        category: CategoryType.PROGRAMMING_SKILL
    },
    {
        name: 'Vue 3',
        months: 0,
        professional: false,
        legacy: false,
        handson: false,
        category: CategoryType.PROGRAMMING_SKILL
    },
    {
        name: 'Ionic',
        months: 0,
        professional: false,
        legacy: false,
        handson: true,
        category: CategoryType.PROGRAMMING_SKILL
    },
    {
        name: 'Android',
        months: 0,
        professional: false,
        legacy: false,
        handson: true,
        category: CategoryType.PROGRAMMING_SKILL
    },
    {
        name: 'CQRS',
        months: 0,
        professional: false,
        legacy: false,
        handson: false,
        category: CategoryType.PROGRAMMING_SKILL
    },
    {
        name: 'Django',
        months: 0,
        professional: false,
        legacy: false,
        handson: false,
        category: CategoryType.PROGRAMMING_SKILL
    },
    {
        name: 'GraphQL',
        months: 0,
        professional: false,
        legacy: false,
        handson: false,
        category: CategoryType.PROGRAMMING_SKILL
    },
    {
        name: 'Tensorflow 2.0',
        months: 0,
        professional: false,
        legacy: false,
        handson: false,
        category: CategoryType.PROGRAMMING_SKILL
    },
    {
        name: 'Machine Learning',
        months: 0,
        professional: false,
        legacy: false,
        handson: false,
        category: CategoryType.PROGRAMMING_SKILL
    },
    {
        name: 'Svelte',
        months: 0,
        professional: false,
        legacy: false,
        handson: false,
        category: CategoryType.PROGRAMMING_SKILL
    },
    {
        name: 'Blazor',
        months: 0,
        professional: false,
        legacy: false,
        handson: false,
        category: CategoryType.PROGRAMMING_SKILL
    },
    {
        name: 'Express.js',
        months: 0,
        professional: false,
        legacy: false,
        handson: false,
        category: CategoryType.PROGRAMMING_SKILL
    },
    {
        name: 'Laravel',
        months: 0,
        professional: false,
        legacy: false,
        handson: false,
        category: CategoryType.PROGRAMMING_SKILL
    },
    {
        name: 'Azure',
        months: 0,
        professional: false,
        legacy: false,
        handson: false,
        category: CategoryType.SOFTWARE
    },
    {
        name: 'UIPath',
        months: 0,
        professional: false,
        legacy: false,
        handson: false,
        category: CategoryType.SOFTWARE
    },
    {
        name: 'Mendix',
        months: 0,
        professional: false,
        legacy: false,
        handson: false,
        category: CategoryType.SOFTWARE
    },
    {
        name: 'Hadoop',
        months: 0,
        professional: false,
        legacy: false,
        handson: false,
        category: CategoryType.SOFTWARE
    },
    {
        name: 'YARN',
        months: 0,
        professional: false,
        legacy: false,
        handson: false,
        category: CategoryType.SOFTWARE
    },
    {
        name: 'Pig',
        months: 0,
        professional: false,
        legacy: false,
        handson: false,
        category: CategoryType.SOFTWARE
    },
    {
        name: 'Hive',
        months: 0,
        professional: false,
        legacy: false,
        handson: false,
        category: CategoryType.SOFTWARE
    },
    {
        name: 'Elixir',
        months: 0,
        professional: false,
        legacy: false,
        handson: false,
        category: CategoryType.SOFTWARE
    }
]

export default skillData