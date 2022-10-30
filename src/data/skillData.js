import CategoryType from 'enums/CategoryType'
import SkillInterestType from 'enums/SkillInterestType'

const skillData = [
    //Professional Experience
    //Programming language
    {
        name: '.NET (C#)',
        months: 126,
        professional: true,
        legacy: false,
        category: CategoryType.PROGRAMMING_SKILL,
        interestLevel: SkillInterestType.INTERESTED
    },
    {
        name: 'WPF',
        months: 30,
        professional: true,
        legacy: false,
        category: CategoryType.PROGRAMMING_SKILL,
        interestLevel: SkillInterestType.NEUTRAL
    },
    {
        name: 'MVVM',
        months: 30,
        professional: true,
        legacy: false,
        category: CategoryType.PROGRAMMING_SKILL,
        interestLevel: SkillInterestType.NEUTRAL
    },
    {
        name: 'Angular',
        months: 30,
        professional: true,
        legacy: false,
        category: CategoryType.PROGRAMMING_SKILL,
        interestLevel: SkillInterestType.HIGHLY_INTERESTED
    },
    {
        name: 'Ngrx',
        months: 30,
        professional: true,
        legacy: false,
        category: CategoryType.PROGRAMMING_SKILL,
        interestLevel: SkillInterestType.HIGHLY_INTERESTED
    },
    {
        name: 'AngularJS',
        months: 5.5,
        professional: true,
        legacy: true,
        category: CategoryType.PROGRAMMING_SKILL,
        interestLevel: SkillInterestType.AVOID
    },
    {
        name: 'Javascript',
        months: 54,
        professional: true,
        legacy: true,
        category: CategoryType.PROGRAMMING_SKILL,
        interestLevel: SkillInterestType.HIGHLY_INTERESTED
    },
    {
        name: 'jQuery',
        months: 36,
        professional: true,
        legacy: true,
        category: CategoryType.PROGRAMMING_SKILL,
        interestLevel: SkillInterestType.AVOID
    },
    {
        name: 'Rest API',
        months: 58,
        professional: true,
        legacy: false,
        category: CategoryType.PROGRAMMING_SKILL,
        interestLevel: SkillInterestType.HIGHLY_INTERESTED
    },
    {
        name: 'WCF',
        months: 48,
        professional: true,
        legacy: true,
        category: CategoryType.PROGRAMMING_SKILL,
        interestLevel: SkillInterestType.NEUTRAL
    },
    {
        name: 'JSON',
        months: 48,
        professional: true,
        legacy: false,
        category: CategoryType.PROGRAMMING_SKILL,
        interestLevel: SkillInterestType.INTERESTED
    },
    {
        name: '.NET Core',
        months: 14,
        professional: true,
        legacy: false,
        category: CategoryType.PROGRAMMING_SKILL,
        interestLevel: SkillInterestType.HIGHLY_INTERESTED
    },
    {
        name: 'XAML',
        months: 30,
        professional: true,
        legacy: false,
        category: CategoryType.PROGRAMMING_SKILL,
        interestLevel: SkillInterestType.NEUTRAL
    },
    {
        name: 'nUnit',
        months: 36,
        professional: true,
        legacy: false,
        category: CategoryType.PROGRAMMING_SKILL,
        interestLevel: SkillInterestType.INTERESTED
    },
    {
        name: 'XUnit',
        months: 2,
        professional: true,
        legacy: false,
        category: CategoryType.PROGRAMMING_SKILL,
        interestLevel: SkillInterestType.HIGHLY_INTERESTED
    },
    {
        name: 'VueJS',
        months: 8,
        professional: true,
        legacy: false,
        category: CategoryType.PROGRAMMING_SKILL,
        interestLevel: SkillInterestType.HIGHLY_INTERESTED
    },
    {
        name: 'NestJS (node.js)',
        months: 8,
        professional: true,
        legacy: false,
        category: CategoryType.PROGRAMMING_SKILL,
        interestLevel: SkillInterestType.HIGHLY_INTERESTED
    },
    {
        name: 'MongoDB',
        months: 12,
        professional: true,
        legacy: false,
        category: CategoryType.PROGRAMMING_SKILL,
        interestLevel: SkillInterestType.HIGHLY_INTERESTED
    },
    {
        name: 'Python',
        months: 3,
        professional: true,
        legacy: false,
        category: CategoryType.PROGRAMMING_SKILL,
        interestLevel: SkillInterestType.INTERESTED
    },
    {
        name: 'ASP.NET MVC',
        months: 38,
        professional: true,
        legacy: false,
        category: CategoryType.PROGRAMMING_SKILL,
        interestLevel: SkillInterestType.INTERESTED
    },
    {
        name: 'Entity Framework',
        months: 46,
        professional: true,
        legacy: false,
        category: CategoryType.PROGRAMMING_SKILL,
        interestLevel: SkillInterestType.HIGHLY_INTERESTED
    },
    {
        name: 'nHibernate',
        months: 18,
        professional: true,
        legacy: false,
        category: CategoryType.PROGRAMMING_SKILL,
        interestLevel: SkillInterestType.HIGHLY_INTERESTED
    },
    {
        name: 'SQLAlchemy',
        months: 3,
        professional: true,
        legacy: false,
        category: CategoryType.PROGRAMMING_SKILL,
        interestLevel: SkillInterestType.NEUTRAL
    },
    {
        name: 'DevExpress XPO',
        months: 1.5,
        professional: true,
        legacy: false,
        category: CategoryType.PROGRAMMING_SKILL,
        interestLevel: SkillInterestType.NEUTRAL
    },
    {
        name: 'Webservices',
        months: 82,
        professional: true,
        legacy: false,
        category: CategoryType.PROGRAMMING_SKILL,
        interestLevel: SkillInterestType.HIGHLY_INTERESTED
    },
    {
        name: 'CSS',
        months: 96,
        professional: true,
        legacy: false,
        category: CategoryType.PROGRAMMING_SKILL,
        interestLevel: SkillInterestType.HIGHLY_INTERESTED
    },
    {
        name: 'HTML',
        months: 96,
        professional: true,
        legacy: false,
        category: CategoryType.PROGRAMMING_SKILL,
        interestLevel: SkillInterestType.HIGHLY_INTERESTED
    },
    {
        name: 'D3.js',
        months: 3,
        professional: true,
        legacy: false,
        category: CategoryType.PROGRAMMING_SKILL,
        interestLevel: SkillInterestType.NEUTRAL
    },
    {
        name: 'Dapper',
        months: 12,
        professional: true,
        legacy: false,
        category: CategoryType.PROGRAMMING_SKILL,
        interestLevel: SkillInterestType.HIGHLY_INTERESTED
    },
    {
        name: 'LINQ',
        months: 64,
        professional: true,
        legacy: false,
        category: CategoryType.PROGRAMMING_SKILL,
        interestLevel: SkillInterestType.HIGHLY_INTERESTED
    },
    {
        name: 'MS Test',
        months: 48,
        professional: true,
        legacy: false,
        category: CategoryType.PROGRAMMING_SKILL,
        interestLevel: SkillInterestType.NEUTRAL
    },
    {
        name: 'Vuetify',
        months: 1,
        professional: true,
        legacy: false,
        category: CategoryType.PROGRAMMING_SKILL,
        interestLevel: SkillInterestType.HIGHLY_INTERESTED
    },
    {
        name: 'Vuex',
        months: 8,
        professional: true,
        legacy: false,
        category: CategoryType.PROGRAMMING_SKILL,
        interestLevel: SkillInterestType.HIGHLY_INTERESTED
    },
    {
        name: 'Docker',
        months: 8,
        professional: true,
        legacy: false,
        category: CategoryType.PROGRAMMING_SKILL,
        interestLevel: SkillInterestType.HIGHLY_INTERESTED
    },
    {
        name: 'Typescript',
        months: 30,
        professional: true,
        legacy: false,
        category: CategoryType.PROGRAMMING_SKILL,
        interestLevel: SkillInterestType.HIGHLY_INTERESTED
    },
    {
        name: 'RabbitMQ',
        months: 6,
        professional: true,
        legacy: false,
        category: CategoryType.PROGRAMMING_SKILL,
        interestLevel: SkillInterestType.HIGHLY_INTERESTED
    },
    {
        name: 'Electron',
        months: 1,
        professional: true,
        legacy: false,
        category: CategoryType.PROGRAMMING_SKILL,
        interestLevel: SkillInterestType.INTERESTED
    },
    {
        name: 'Formly',
        months: 18,
        professional: true,
        legacy: false,
        category: CategoryType.PROGRAMMING_SKILL,
        interestLevel: SkillInterestType.INTERESTED
    },
    {
        name: 'Azure',
        months: 1,
        professional: true,
        legacy: false,
        handson: true,
        category: CategoryType.SOFTWARE,
        interestLevel: SkillInterestType.INTERESTED
    },
    {
        name: 'Xamarin',
        months: 6,
        professional: true,
        legacy: false,
        handson: true,
        category: CategoryType.PROGRAMMING_SKILL,
        interestLevel: SkillInterestType.NEUTRAL
    },
    {
        name: 'Node.js',
        months: 8,
        professional: true,
        legacy: false,
        handson: true,
        category: CategoryType.PROGRAMMING_SKILL,
        interestLevel: SkillInterestType.INTERESTED
    },
    {
        name: 'Winforms',
        months: 24,
        professional: true,
        legacy: true,
        category: CategoryType.PROGRAMMING_SKILL,
        interestLevel: SkillInterestType.AVOID
    },
    {
        name: 'VBScript',
        months: 1,
        professional: true,
        legacy: true,
        category: CategoryType.PROGRAMMING_SKILL,
        interestLevel: SkillInterestType.AVOID
    },
    // Methodologies
    {
        name: 'Scrum/Agile',
        months: 30,
        professional: true,
        legacy: false,
        category: CategoryType.METHODOLOGY,
        interestLevel: SkillInterestType.HIGHLY_INTERESTED
    },
    {
        name: 'OO Development',
        months: 126,
        professional: true,
        legacy: false,
        category: CategoryType.METHODOLOGY,
        interestLevel: SkillInterestType.HIGHLY_INTERESTED
    },
    {
        name: 'TDD',
        months: 38,
        professional: true,
        legacy: false,
        category: CategoryType.METHODOLOGY,
        interestLevel: SkillInterestType.HIGHLY_INTERESTED
    },
    {
        name: 'UML Design',
        months: 12,
        professional: true,
        legacy: false,
        category: CategoryType.METHODOLOGY,
        interestLevel: SkillInterestType.INTERESTED
    },
    {
        name: 'DDD',
        months: 12,
        professional: true,
        legacy: false,
        category: CategoryType.METHODOLOGY,
        interestLevel: SkillInterestType.INTERESTED
    },
    {
        name: 'SOA',
        months: 12,
        professional: true,
        legacy: false,
        category: CategoryType.METHODOLOGY,
        interestLevel: SkillInterestType.INTERESTED
    },
    {
        name: 'Devops',
        months: 12,
        professional: true,
        legacy: false,
        category: CategoryType.METHODOLOGY,
        interestLevel: SkillInterestType.INTERESTED
    },
    {
        name: 'Waterfall development',
        months: 72,
        professional: true,
        legacy: true,
        category: CategoryType.METHODOLOGY,
        interestLevel: SkillInterestType.AVOID
    },
    //Software
    {
        name: 'Visual Studio .NET',
        months: 118,
        professional: true,
        legacy: false,
        category: CategoryType.SOFTWARE,
        interestLevel: SkillInterestType.HIGHLY_INTERESTED
    },
    {
        name: 'Visual Studio Code',
        months: 30,
        professional: true,
        legacy: false,
        category: CategoryType.SOFTWARE,
        interestLevel: SkillInterestType.HIGHLY_INTERESTED
    },
    {
        name: 'PyCharm',
        months: 3,
        professional: true,
        legacy: false,
        category: CategoryType.SOFTWARE,
        interestLevel: SkillInterestType.NEUTRAL
    },
    {
        name: 'Microsoft Office',
        months: 76,
        professional: true,
        legacy: false,
        category: CategoryType.SOFTWARE,
        interestLevel: SkillInterestType.NEUTRAL
    },
    {
        name: 'OpenOffice',
        months: 3,
        professional: true,
        legacy: false,
        category: CategoryType.SOFTWARE,
        interestLevel: SkillInterestType.NEUTRAL
    },
    {
        name: 'Rational Rose',
        months: 9,
        professional: true,
        legacy: true,
        category: CategoryType.SOFTWARE,
        interestLevel: SkillInterestType.NEUTRAL
    },
    {
        name: 'Redgate SQL Compare',
        months: 1,
        professional: true,
        legacy: false,
        category: CategoryType.SOFTWARE,
        interestLevel: SkillInterestType.NEUTRAL
    },
    {
        name: 'Kentico CMS',
        months: 12,
        professional: true,
        legacy: true,
        category: CategoryType.SOFTWARE,
        interestLevel: SkillInterestType.NEUTRAL
    },
    {
        name: 'SQL Server',
        months: 85,
        professional: true,
        legacy: false,
        category: CategoryType.SOFTWARE,
        interestLevel: SkillInterestType.HIGHLY_INTERESTED
    },
    {
        name: 'MySQL',
        months: 3,
        professional: true,
        legacy: false,
        category: CategoryType.SOFTWARE,
        interestLevel: SkillInterestType.INTERESTED
    },
    {
        name: 'PostgreSQL',
        months: 9,
        professional: true,
        legacy: false,
        category: CategoryType.SOFTWARE,
        interestLevel: SkillInterestType.INTERESTED
    },
    {
        name: 'Identity Server',
        months: 3,
        professional: true,
        legacy: false,
        category: CategoryType.SOFTWARE,
        interestLevel: SkillInterestType.NEUTRAL
    },
    {
        name: 'PHPStorm',
        months: 8,
        professional: true,
        legacy: false,
        category: CategoryType.SOFTWARE,
        interestLevel: SkillInterestType.NEUTRAL
    },
    {
        name: 'Git',
        months: 40,
        professional: true,
        legacy: false,
        category: CategoryType.SOFTWARE,
        interestLevel: SkillInterestType.HIGHLY_INTERESTED
    },
    {
        name: 'Visual SVN',
        months: 72,
        professional: true,
        legacy: false,
        category: CategoryType.SOFTWARE,
        interestLevel: SkillInterestType.NEUTRAL
    },
    {
        name: 'Team Foundation Server',
        months: 7,
        professional: true,
        legacy: false,
        category: CategoryType.SOFTWARE,
        interestLevel: SkillInterestType.INTERESTED
    },
    {
        name: 'Visual SourceSafe',
        months: 24,
        professional: true,
        legacy: true,
        category: CategoryType.SOFTWARE,
        interestLevel: SkillInterestType.AVOID
    },
    {
        name: 'Windows',
        months: 148,
        professional: true,
        legacy: false,
        category: CategoryType.SOFTWARE,
        interestLevel: SkillInterestType.HIGHLY_INTERESTED
    },
    {
        name: 'Ubuntu',
        months: 3,
        professional: true,
        legacy: false,
        category: CategoryType.SOFTWARE,
        interestLevel: SkillInterestType.INTERESTED
    },
    {
        name: 'Telerik Controls',
        months: 18,
        professional: true,
        legacy: false,
        category: CategoryType.SOFTWARE,
        interestLevel: SkillInterestType.INTERESTED
    },
    {
        name: 'Mercury Loadrunner',
        months: 3,
        professional: true,
        legacy: true,
        category: CategoryType.SOFTWARE,
        interestLevel: SkillInterestType.AVOID
    },
    {
        name: 'Oracle',
        months: 24,
        professional: true,
        legacy: false,
        category: CategoryType.SOFTWARE,
        interestLevel: SkillInterestType.HIGHLY_INTERESTED
    },
    {
        name: 'Firebird',
        months: 1.5,
        professional: true,
        legacy: false,
        category: CategoryType.SOFTWARE,
        interestLevel: SkillInterestType.INTERESTED
    },
    {
        name: 'MapGuide',
        months: 9,
        professional: true,
        legacy: false,
        category: CategoryType.SOFTWARE,
        interestLevel: SkillInterestType.INTERESTED
    },
    {
        name: 'PgAdmin',
        months: 9,
        professional: true,
        legacy: false,
        category: CategoryType.SOFTWARE,
        interestLevel: SkillInterestType.INTERESTED
    },
    {
        name: 'Docker For Windows',
        months: 8,
        professional: true,
        legacy: false,
        category: CategoryType.SOFTWARE,
        interestLevel: SkillInterestType.HIGHLY_INTERESTED
    },
    {
        name: 'Amazon AWS',
        months: 8,
        professional: true,
        legacy: false,
        category: CategoryType.SOFTWARE,
        interestLevel: SkillInterestType.HIGHLY_INTERESTED
    },
    {
        name: 'Jira',
        months: 8,
        professional: true,
        legacy: false,
        category: CategoryType.SOFTWARE,
        interestLevel: SkillInterestType.HIGHLY_INTERESTED
    },
    // Self taught
    {
        name: 'Flutter',
        months: 0,
        professional: false,
        legacy: false,
        handson: false,
        category: CategoryType.PROGRAMMING_SKILL,
        interestLevel: SkillInterestType.INTERESTED
    },
    {
        name: 'Java',
        months: 0,
        professional: false,
        legacy: false,
        handson: true,
        category: CategoryType.PROGRAMMING_SKILL,
        interestLevel: SkillInterestType.INTERESTED
    },
    {
        name: 'Spring',
        months: 0,
        professional: false,
        legacy: false,
        handson: true,
        category: CategoryType.PROGRAMMING_SKILL,
        interestLevel: SkillInterestType.INTERESTED
    },
    {
        name: 'Spring Boot',
        months: 0,
        professional: false,
        legacy: false,
        handson: true,
        category: CategoryType.PROGRAMMING_SKILL,
        interestLevel: SkillInterestType.INTERESTED
    },
    {
        name: 'Project Lombok',
        months: 0,
        professional: false,
        legacy: false,
        handson: true,
        category: CategoryType.PROGRAMMING_SKILL,
        interestLevel: SkillInterestType.INTERESTED
    },
    {
        name: 'ActiveMQ',
        months: 0,
        professional: false,
        legacy: false,
        handson: false,
        category: CategoryType.PROGRAMMING_SKILL,
        interestLevel: SkillInterestType.INTERESTED
    },
    {
        name: 'Thymeleaf',
        months: 0,
        professional: false,
        legacy: false,
        handson: true,
        category: CategoryType.PROGRAMMING_SKILL,
        interestLevel: SkillInterestType.INTERESTED
    },
    {
        name: 'IntelliJ IDEA',
        months: 0,
        professional: false,
        legacy: false,
        handson: true,
        category: CategoryType.SOFTWARE,
        interestLevel: SkillInterestType.INTERESTED
    },
    {
        name: 'Mockito',
        months: 0,
        professional: false,
        legacy: false,
        handson: true,
        category: CategoryType.PROGRAMMING_SKILL,
        interestLevel: SkillInterestType.INTERESTED
    },
    {
        name: 'Kubernates',
        months: 0,
        professional: false,
        legacy: false,
        handson: false,
        category: CategoryType.PROGRAMMING_SKILL,
        interestLevel: SkillInterestType.INTERESTED
    },
    {
        name: 'React',
        months: 0,
        professional: false,
        legacy: false,
        handson: true,
        category: CategoryType.PROGRAMMING_SKILL,
        interestLevel: SkillInterestType.HIGHLY_INTERESTED
    },
    {
        name: 'React Native',
        months: 0,
        professional: false,
        legacy: false,
        handson: false,
        category: CategoryType.PROGRAMMING_SKILL,
        interestLevel: SkillInterestType.HIGHLY_INTERESTED
    },
    {
        name: 'Vue 3',
        months: 0,
        professional: false,
        legacy: false,
        handson: false,
        category: CategoryType.PROGRAMMING_SKILL,
        interestLevel: SkillInterestType.HIGHLY_INTERESTED
    },
    {
        name: 'Ionic',
        months: 2,
        professional: true,
        legacy: false,
        handson: true,
        category: CategoryType.PROGRAMMING_SKILL,
        interestLevel: SkillInterestType.INTERESTED
    },
    {
        name: 'Android',
        months: 0,
        professional: false,
        legacy: false,
        handson: true,
        category: CategoryType.PROGRAMMING_SKILL,
        interestLevel: SkillInterestType.INTERESTED
    },
    {
        name: 'CQRS',
        months: 1,
        professional: true,
        legacy: false,
        handson: false,
        category: CategoryType.PROGRAMMING_SKILL,
        interestLevel: SkillInterestType.INTERESTED
    },
    {
        name: 'Django',
        months: 0,
        professional: false,
        legacy: false,
        handson: false,
        category: CategoryType.PROGRAMMING_SKILL,
        interestLevel: SkillInterestType.INTERESTED
    },
    {
        name: 'GraphQL',
        months: 0,
        professional: false,
        legacy: false,
        handson: false,
        category: CategoryType.PROGRAMMING_SKILL,
        interestLevel: SkillInterestType.HIGHLY_INTERESTED
    },
    {
        name: 'Tensorflow 2.0',
        months: 0,
        professional: false,
        legacy: false,
        handson: false,
        category: CategoryType.PROGRAMMING_SKILL,
        interestLevel: SkillInterestType.INTERESTED
    },
    {
        name: 'Machine Learning',
        months: 0,
        professional: false,
        legacy: false,
        handson: false,
        category: CategoryType.PROGRAMMING_SKILL,
        interestLevel: SkillInterestType.HIGHLY_INTERESTED
    },
    {
        name: 'Svelte',
        months: 0,
        professional: false,
        legacy: false,
        handson: false,
        category: CategoryType.PROGRAMMING_SKILL,
        interestLevel: SkillInterestType.INTERESTED
    },
    {
        name: 'Blazor',
        months: 0,
        professional: false,
        legacy: false,
        handson: false,
        category: CategoryType.PROGRAMMING_SKILL,
        interestLevel: SkillInterestType.INTERESTED
    },
    {
        name: 'Express.js',
        months: 0,
        professional: false,
        legacy: false,
        handson: false,
        category: CategoryType.PROGRAMMING_SKILL,
        interestLevel: SkillInterestType.INTERESTED
    },
    {
        name: 'Laravel',
        months: 0,
        professional: false,
        legacy: false,
        handson: false,
        category: CategoryType.PROGRAMMING_SKILL,
        interestLevel: SkillInterestType.NEUTRAL
    },
    {
        name: 'UIPath',
        months: 0,
        professional: false,
        legacy: false,
        handson: false,
        category: CategoryType.SOFTWARE,
        interestLevel: SkillInterestType.NEUTRAL
    },
    {
        name: 'Mendix',
        months: 0,
        professional: false,
        legacy: false,
        handson: false,
        category: CategoryType.SOFTWARE,
        interestLevel: SkillInterestType.NEUTRAL
    },
    {
        name: 'Hadoop',
        months: 0,
        professional: false,
        legacy: false,
        handson: false,
        category: CategoryType.SOFTWARE,
        interestLevel: SkillInterestType.NEUTRAL
    },
    {
        name: 'YARN',
        months: 0,
        professional: false,
        legacy: false,
        handson: false,
        category: CategoryType.SOFTWARE,
        interestLevel: SkillInterestType.NEUTRAL
    },
    {
        name: 'Pig',
        months: 0,
        professional: false,
        legacy: false,
        handson: false,
        category: CategoryType.SOFTWARE,
        interestLevel: SkillInterestType.NEUTRAL
    },
    {
        name: 'Hive',
        months: 0,
        professional: false,
        legacy: false,
        handson: false,
        category: CategoryType.SOFTWARE,
        interestLevel: SkillInterestType.NEUTRAL
    },
    {
        name: 'Elixir',
        months: 0,
        professional: false,
        legacy: false,
        handson: false,
        category: CategoryType.SOFTWARE,
        interestLevel: SkillInterestType.NEUTRAL
    }
]

export default skillData