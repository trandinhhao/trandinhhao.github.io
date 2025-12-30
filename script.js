// Portfolio Data
const data = {
    about: {
        name: "Trần Đình Hào",
        location: "Hai Ba Trung, Hanoi",
        email: "haodinhtran06@gmail.com",
        phone: "033 518 6272",
        linkedin: "linkedin.com/in/trandinhhao",
        github: "github.com/trandinhhao"
    },
    education: [
        {
            degree: "B.E. in Information Technology - Major: Software Engineering",
            duration: "Sep 2022 - Present",
            institution: "Posts and Telecommunications Institute of Technology - PTIT",
            gpa: "GPA: 3.45",
            highlights: [
                "Awarded the PTIT Academic Encouragement Scholarship 3 times (2023, 2024, 2025)",
                "Participated in the JAIST & PTIT: AI Summer School 2024 program",
                "Finalist (Top 8), Consolation Prize & Audience Choice Award, P-Innovation 2025",
                "Selected for Australia–Vietnam Strategic Technologies Scholarship",
                "Selected for Samsung Talent Program Scholarship (STP) 2025",
                "Principal Author of Student Scientific Research Project, PTIT (2025): Research and Development of an Innovative Charity Platform"
            ]
        }
    ],
    experience: [
        {
            title: "Software Engineer Intern - Core Backend Engineer",
            duration: "Sep 2025 - Dec 2025",
            company: "EUP Group",
            location: "Hanoi, Vietnam",
            responsibilities: [
                "Core Backend Engineer for the Phase 1 (MVP) launch of Ezami (ezami.io), an IT certification learning and exam-preparation platform (PSM, ISTQB, CBAP, CCBA, ECBA)",
                "Designed and implemented backend services using Java Spring Boot and MySQL",
                "Led the development of the Course and Lesson modules, supporting structured learning paths and exam-oriented practice",
                "Built APIs to manage courses, lessons, and learning content, ensuring scalability and maintainability",
                "Developed custom WordPress admin plugins to support operational workflows, including bulk import of exam questions via CSV files for efficient content management",
                "Integrated and deployed image storage solutions using Cloudinary, Cloudflare R2, and on-premise system storage, enabling flexible and scalable media management",
                "Collaborated with frontend, mobile and marketing teams throughout the project deployment phase"
            ]
        },
        {
            title: "Ruby on Rails Developer Intern",
            duration: "Aug 2025 - Sep 2025",
            company: "BUNBU",
            location: "Hanoi, Vietnam",
            responsibilities: [
                "Ruby on Rails Developer Intern at BUNBU, a subsidiary of Appirits Inc., one of Japan's leading IT companies",
                "Focus on learning Ruby on Rails",
                "Explored Ruby on Rails, including its syntax, Active Record, and migration system; later shifted focus to other backend technologies"
            ]
        },
        {
            title: "Research and Development (R&D) Associate",
            duration: "Nov 2024 - Aug 2025",
            company: "PTIT Innovation & Entrepreneurship Center (PTIT - IEC)",
            location: "PTIT",
            responsibilities: [
                "Backend development for several PTIT products in collaboration with external organizations"
            ]
        }
    ],
    skills: {
        languages: ["Java", "Python", "C#", "C/C++"],
        backend: ["JDBC", "Spring Data JPA", "Spring Boot", "Spring Security"],
        databases: ["MySQL", "SQL Server", "PostgreSQL"],
        devTools: ["IntelliJ", "Apache NetBeans", "Eclipse"],
        projectMgmt: ["Jira", "Git", "Github", "Gitlab"],
        softSkills: ["Self-Learning", "Problem Solving", "Critical Thinking", "Analytical Thinking", "Teamwork"]
    },
    projects: [
        {
            name: "Charity Backend Platform",
            tech: "(Java, Spring Boot, MySQL)",
            duration: "Jul 2025 - Present",
            description: [
                "Designed and implemented backend services using Spring Boot, developing RESTful APIs for campaign management, skill auction system, and donation processing with JWT-based authentication and role-based authorization (RBAC)",
                "Built an AI-powered Evidence Verification Service integrating OpenAI GPT-4o through Spring AI framework, processing user-submitted proof images asynchronously with confidence scoring for automated challenge approval workflows",
                "Developed a real-time Skill Auction System with concurrent bid handling using Pessimistic Locking and Redis caching to prevent race conditions, implementing automated auction lifecycle management with scheduled tasks for activation and finalization",
                "Integrated PayOS payment gateway for donation transactions and created a multi-provider AI chat service with conversation memory using Spring AI, supporting text and image analysis capabilities",
                "Designed comprehensive data persistence layer using Spring Data JPA with MySQL, creating 12+ entity models with complex relationships, custom repository implementations with SQL Native, JPQL queries, and MapStruct for DTO-Entity mapping"
            ]
        },
        {
            name: "Store Word File In SQL Server",
            tech: "(C# .NET, Windows Forms, SQL Server)",
            duration: "Mar 2025 - Jun 2025",
            description: [
                "Designed and implemented a comprehensive document management system using Windows Forms and C#, following MVC architecture for maintainable code structure",
                "Developed a robust database schema using SQL Server to store complex document structures including sections, headings, paragraphs, and mathematical equations",
                "Created efficient data access layer using Entity Framework for seamless database operations and data integrity"
            ]
        }
    ],
    languages: [
        "English: TOEIC Listening & Reading | 680/990"
    ],
    awards: [
        "Samsung Talent Program Scholarship (STP) 2025 by Samsung R&D Center Vietnam (SRV) - Sep 2025",
        "Australia–Vietnam Strategic Technologies Scholarship by AVSTC - Jun 2025",
        "Finalist (Top 8), Consolation Prize & Audience Choice Award, P-Innovation 2025 by HCYU of PTIT - May 2025",
        "Semi-finalist, Code Tour 2024 by VNG - Jun 2024",
        "Finalist (Top 12), Future Blue Innovation Competition by HCYU of Hanoi City, AngelHack, Vinfast - Jun 2021"
    ],
    certifications: [
        "VPBank Cloud Quest 2025 by VPBank, AWS - Nov 2025",
        "Samsung Innovation Campus 2025 - Big Data Trainee by Samsung Electronics Vietnam, LetuinEdu - Sep 2025",
        "Java Certification: Foundations to Advance Concepts by Udemy - Jun 2025"
    ]
};

// Terminal commands and their outputs
const commands = {
    about: `
        <div class="command-output">
            <div class="block">
                <p class="section-title" style="margin-top: 1.5rem; color: #ff6b6b;">About Me</p>
                <p>Software Engineer with experience in backend development, focusing on Java Spring Boot, RESTful APIs, and Backend technologies.</p>
            </div>
            <div class="block">
                <p>Currently pursuing B.E. in Information Technology at PTIT with a strong academic record and multiple scholarship awards.</p>
            </div>
            <div class="block">
                <p class="section-title" style="margin-top: 1.5rem; color: #ff6b6b;">What I Do</p>
                <p>I specialize in building scalable backend systems, developing ML-powered features, and creating efficient data persistence layers. My work spans authentication systems, payment integrations, and AI-enhanced applications.</p>
            </div>
            <div class="block">
                <p>I'm passionate about creating software that delivers real value and continuously learning new technologies to improve my craft.</p>
            </div>
        </div>
    `,
    
    experience: `
        <div class="command-output">
            <div class="block">
                <p class="section-title" style="margin-top: 1.5rem; color: #ff6b6b;">EUP Group - IT Certification Platform</p>
                <p><i>Software Engineer Intern - Core Backend Engineer</i> | Sep 2025 - Dec 2025</p>
            </div>
            
            <div class="block">
                <p style="margin-top: 1.5rem;">Core Backend Engineer for the Phase 1 (MVP) launch of Ezami (ezami.io), an IT certification learning and exam-preparation platform (PSM, ISTQB, CBAP, CCBA, ECBA).</p>
            </div>
            
            <div class="block">
                <p class="section-title" style="margin-top: 1.5rem; color: #ff6b6b;">Key Contributions:</p>
            </div>
            
            <div class="block">
                <ul>
                    <li>Designed and implemented backend services using <strong>Java Spring Boot</strong> and <strong>MySQL</strong></li>
                    <li>Led the development of the <strong>Course and Lesson modules</strong>, supporting structured learning paths and exam-oriented practice</li>
                    <li>Built APIs to manage courses, lessons, and learning content, ensuring scalability and maintainability</li>
                    <li>Developed custom <strong>WordPress admin plugins</strong> for operational workflows, including bulk import of exam questions via CSV files</li>
                    <li>Integrated and deployed image storage solutions using <strong>Cloudinary, Cloudflare R2</strong>, and on-premise system storage</li>
                    <li>Collaborated with frontend, mobile and marketing teams throughout the project deployment phase</li>
                </ul>
            </div>
            
            <div class="block">
                <p class="section-title" style="color: #ff6b6b; margin-top: 2rem;">BUNBU - Appirits Inc. Subsidiary</p>
                <p><i>Ruby on Rails Developer Intern</i> | Aug 2025 - Sep 2025</p>
            </div>
            
            <div class="block">
                <ul>
                    <li>Ruby on Rails Developer Intern at BUNBU, a subsidiary of <strong>Appirits Inc.</strong>, one of Japan's leading IT companies</li>
                    <li>Focused on learning <strong>Ruby on Rails framework</strong></li>
                    <li>Explored Ruby on Rails syntax, <strong>Active Record</strong>, and migration system</li>
                    <li>Later shifted focus to other backend technologies, broadening technical expertise</li>
                </ul>
            </div>
            
            <div class="block">
                <p class="section-title" style="color: #ff6b6b; margin-top: 2rem;">PTIT Innovation & Entrepreneurship Center</p>
                <p><i>Research and Development (R&D) Associate</i> | Nov 2024 - Aug 2025</p>
            </div>
            
            <div class="block">
                <ul>
                    <li>Backend development for several <strong>PTIT products</strong> in collaboration with external organizations</li>
                    <li>Contributed to research and development initiatives within the innovation center</li>
                </ul>
            </div>
        </div>
    `,
    
    eup: `
        <div class="command-output">
            <div class="block">
                <p class="section-title" style="margin-top: 1.5rem; color: #ff6b6b;">EUP Group - IT Certification Platform</p>
                <p><i>Software Engineer Intern - Core Backend Engineer</i> | Sep 2025 - Dec 2025</p>
            </div>
            
            <div class="block">
                <p style="margin-top: 1.5rem;">Core Backend Engineer for the Phase 1 (MVP) launch of Ezami (ezami.io), an IT certification learning and exam-preparation platform (PSM, ISTQB, CBAP, CCBA, ECBA).</p>
            </div>
            
            <div class="block">
                <p class="section-title" style="margin-top: 1.5rem; color: #ff6b6b;">Key Contributions:</p>
            </div>
            
            <div class="block">
                <ul>
                    <li>Designed and implemented backend services using <strong>Java Spring Boot</strong> and <strong>MySQL</strong></li>
                    <li>Led the development of the <strong>Course and Lesson modules</strong>, supporting structured learning paths and exam-oriented practice</li>
                    <li>Built APIs to manage courses, lessons, and learning content, ensuring scalability and maintainability</li>
                    <li>Developed custom <strong>WordPress admin plugins</strong> for operational workflows, including bulk import of exam questions via CSV files</li>
                    <li>Integrated and deployed image storage solutions using <strong>Cloudinary, Cloudflare R2</strong>, and on-premise system storage</li>
                    <li>Collaborated with frontend, mobile and marketing teams throughout the project deployment phase</li>
                </ul>
            </div>
        </div>
    `,
    
    bunbu: `
        <div class="command-output">
            <div class="block">
                <p class="section-title" style="margin-top: 1.5rem; color: #ff6b6b;">BUNBU - Appirits Inc. Subsidiary</p>
                <p><i>Ruby on Rails Developer Intern</i> | Aug 2025 - Sep 2025</p>
            </div>
            
            <div class="block">
                <ul>
                    <li>Ruby on Rails Developer Intern at BUNBU, a subsidiary of <strong>Appirits Inc.</strong>, one of Japan's leading IT companies</li>
                    <li>Focused on learning <strong>Ruby on Rails framework</strong></li>
                    <li>Explored Ruby on Rails syntax, <strong>Active Record</strong>, and migration system</li>
                    <li>Later shifted focus to other backend technologies, broadening technical expertise</li>
                </ul>
            </div>
        </div>
    `,
    
    "ptit-iec": `
        <div class="command-output">
            <div class="block">
                <p class="section-title" style="margin-top: 1.5rem; color: #ff6b6b;">PTIT Innovation & Entrepreneurship Center</p>
                <p><i>Research and Development (R&D) Associate</i> | Nov 2024 - Aug 2025</p>
            </div>
            
            <div class="block">
                <ul>
                    <li>Backend development for several <strong>PTIT products</strong> in collaboration with external organizations</li>
                    <li>Contributed to research and development initiatives within the innovation center</li>
                </ul>
            </div>
        </div>
    `,
    
    education: `
        <div class="command-output">
            <div class="block">
                <p class="section-title" style="margin-top: 1.5rem; color: #ff6b6b;">B.E. in Information Technology - Software Engineering</p>
                <p>Posts and Telecommunications Institute of Technology - PTIT | Sep 2022 - Present</p>
                <p><i>GPA: 3.45</i></p>
            </div>
            
            <div class="block">
                <p class="section-title" style="color: #ff6b6b; margin-top: 2rem;">Academic Achievements</p>
                <ul>
                    <li>Awarded the <strong>PTIT Academic Encouragement Scholarship</strong> 3 times (2023, 2024, 2025)</li>
                    <li>Participated in the <strong>JAIST & PTIT: AI Summer School 2024</strong> program</li>
                    <li><strong>Finalist (Top 8)</strong>, Consolation Prize & Audience Choice Award, P-Innovation 2025</li>
                    <li>Selected for <strong>Australia–Vietnam Strategic Technologies Scholarship</strong></li>
                    <li>Selected for <strong>Samsung Talent Program Scholarship (STP) 2025</strong></li>
                    <li><strong>Principal Author</strong> of Student Scientific Research Project, PTIT (2025): Research and Development of an Innovative Charity Platform</li>
                </ul>
            </div>
        </div>
    `,
    
    skills: `
        <div class="command-output">
            <div class="block">
                <p class="section-title" style="margin-top: 1.5rem; color: #ff6b6b;">Programming Languages</p>
                <p>Java, Python, C#, C/C++</p>
            </div>
            
            <div class="block">
                <p class="section-title" style="margin-top: 1.5rem; color: #ff6b6b;">Backend Technologies</p>
                <p>JDBC, Spring Data JPA, Spring Boot, Spring Security</p>
            </div>
            
            <div class="block">
                <p class="section-title" style="margin-top: 1.5rem; color: #ff6b6b;">Databases</p>
                <p>MySQL, SQL Server, PostgreSQL</p>
            </div>
            
            <div class="block">
                <p class="section-title" style="margin-top: 1.5rem; color: #ff6b6b;">Developer Tools</p>
                <p>IntelliJ, Apache NetBeans, Eclipse</p>
            </div>
            
            <div class="block">
                <p class="section-title" style="margin-top: 1.5rem; color: #ff6b6b;">Project Management</p>
                <p>Jira, Git, Github, Gitlab</p>
            </div>
            
            <div class="block">
                <p class="section-title" style="margin-top: 1.5rem; color: #ff6b6b;">Soft Skills</p>
                <p>Self-Learning, Problem Solving, Critical Thinking, Analytical Thinking, Teamwork</p>
            </div>
        </div>
    `,
    
    projects: `
        <div class="command-output">
            <div class="block">
                <p class="section-title" style="margin-top: 1.5rem; color: #ff6b6b;">Charity Backend Platform</p>
                <p><i>Java, Spring Boot, MySQL</i> | Jul 2025 - Present</p>
            </div>
            
            <div class="block">
                <ul>
                    <li>Designed and implemented backend services using <strong>Spring Boot</strong>, developing RESTful APIs for campaign management, skill auction system, and donation processing with <strong>JWT-based authentication</strong> and role-based authorization (RBAC)</li>
                    <li>Built an <strong>AI-powered Evidence Verification Service</strong> integrating OpenAI GPT-4o through Spring AI framework, processing user-submitted proof images asynchronously with confidence scoring</li>
                    <li>Developed a real-time <strong>Skill Auction System</strong> with concurrent bid handling using Pessimistic Locking and <strong>Redis caching</strong> to prevent race conditions</li>
                    <li>Integrated <strong>PayOS payment gateway</strong> for donation transactions and created a multi-provider AI chat service with conversation memory</li>
                    <li>Designed comprehensive data persistence layer using <strong>Spring Data JPA</strong> with MySQL, creating 12+ entity models with complex relationships</li>
                </ul>
            </div>
            
            <div class="block">
                <p class="section-title" style="color: #ff6b6b; margin-top: 2rem;">Store Word File In SQL Server</p>
                <p><i>C# .NET, Windows Forms, SQL Server</i> | Mar 2025 - Jun 2025</p>
            </div>
            
            <div class="block">
                <ul>
                    <li>Designed and implemented a comprehensive <strong>document management system</strong> using Windows Forms and C#, following MVC architecture</li>
                    <li>Developed a robust database schema using <strong>SQL Server</strong> to store complex document structures including sections, headings, paragraphs, and mathematical equations</li>
                    <li>Created efficient data access layer using <strong>Entity Framework</strong> for seamless database operations and data integrity</li>
                </ul>
            </div>
        </div>
    `,
    
    charity: `
        <div class="command-output">
            <div class="block">
                <p class="section-title" style="margin-top: 1.5rem; color: #ff6b6b;">Charity Backend Platform</p>
                <p><i>Java, Spring Boot, MySQL</i> | Jul 2025 - Present</p>
            </div>
            
            <div class="block">
                <ul>
                    <li>Designed and implemented backend services using <strong>Spring Boot</strong>, developing RESTful APIs for campaign management, skill auction system, and donation processing with <strong>JWT-based authentication</strong> and role-based authorization (RBAC)</li>
                    <li>Built an <strong>AI-powered Evidence Verification Service</strong> integrating OpenAI GPT-4o through Spring AI framework, processing user-submitted proof images asynchronously with confidence scoring</li>
                    <li>Developed a real-time <strong>Skill Auction System</strong> with concurrent bid handling using Pessimistic Locking and <strong>Redis caching</strong> to prevent race conditions</li>
                    <li>Integrated <strong>PayOS payment gateway</strong> for donation transactions and created a multi-provider AI chat service with conversation memory</li>
                    <li>Designed comprehensive data persistence layer using <strong>Spring Data JPA</strong> with MySQL, creating 12+ entity models with complex relationships</li>
                </ul>
            </div>
        </div>
    `,
    
    document: `
        <div class="command-output">
            <div class="block">
                <p class="section-title" style="margin-top: 1.5rem; color: #ff6b6b;">Store Word File In SQL Server</p>
                <p><i>C# .NET, Windows Forms, SQL Server</i> | Mar 2025 - Jun 2025</p>
            </div>
            
            <div class="block">
                <ul>
                    <li>Designed and implemented a comprehensive <strong>document management system</strong> using Windows Forms and C#, following MVC architecture</li>
                    <li>Developed a robust database schema using <strong>SQL Server</strong> to store complex document structures including sections, headings, paragraphs, and mathematical equations</li>
                    <li>Created efficient data access layer using <strong>Entity Framework</strong> for seamless database operations and data integrity</li>
                </ul>
            </div>
        </div>
    `,
    
    awards: `
        <div class="command-output">
            <div class="block">
                <p class="section-title" style="margin-top: 1.5rem; color: #ff6b6b;">Awards and Achievements</p>
            </div>
            <div class="block">
                <ul>
                    <li><strong>Samsung Talent Program Scholarship (STP) 2025</strong> by Samsung R&D Center Vietnam (SRV) - Sep 2025</li>
                </ul>
            </div>
            <div class="block">
                <ul>
                    <li><strong>Australia–Vietnam Strategic Technologies Scholarship</strong> by AVSTC - Jun 2025</li>
                </ul>
            </div>
            <div class="block">
                <ul>
                    <li><strong>Finalist (Top 8), Consolation Prize & Audience Choice Award</strong>, P-Innovation 2025 by HCYU of PTIT - May 2025</li>
                </ul>
            </div>
            <div class="block">
                <ul>
                    <li><strong>Semi-finalist</strong>, Code Tour 2024 by VNG - Jun 2024</li>
                </ul>
            </div>
            <div class="block">
                <ul>
                    <li><strong>Finalist (Top 12)</strong>, Future Blue Innovation Competition by HCYU of Hanoi City, AngelHack, Vinfast - Jun 2021</li>
                </ul>
            </div>
        </div>
    `,
    
    certifications: `
        <div class="command-output">
            <div class="block">
                <p class="section-title" style="margin-top: 1.5rem; color: #ff6b6b;">Certifications</p>
            </div>
            <div class="block">
                <ul>
                    <li><strong>VPBank Cloud Quest 2025</strong> by VPBank, AWS - Nov 2025</li>
                </ul>
            </div>
            <div class="block">
                <ul>
                    <li><strong>Samsung Innovation Campus 2025 - Big Data Trainee</strong> by Samsung Electronics Vietnam, LetuinEdu - Sep 2025</li>
                </ul>
            </div>
            <div class="block">
                <ul>
                    <li><strong>Java Certification: Foundations to Advance Concepts</strong> by Udemy - Jun 2025</li>
                </ul>
            </div>
        </div>
    `,
    
    contact: `
        <div class="command-output">
            <div class="block">
                <p class="section-title" style="margin-top: 1.5rem; color: #ff6b6b;">Let's Connect</p>
                <p>Email: <a href="mailto:haodinhtran06@gmail.com" style="color: #83a6ff;">haodinhtran06@gmail.com</a></p>
                <p>Phone: <a href="tel:+84335186272" style="color: #83a6ff;">(+84) 033 518 6272</a></p>
                <p>Location: Hai Ba Trung, Hanoi</p>
                <p>GitHub: <a href="https://github.com/trandinhhao" target="_blank" style="color: #83a6ff;">github.com/trandinhhao</a></p>
                <p>LinkedIn: <a href="https://linkedin.com/in/trandinhhao" target="_blank" style="color: #83a6ff;">linkedin.com/in/trandinhhao</a></p>
            </div>
        </div>
    `,
    
    ls: `
        <div class="nav-links">
            <a href="#" data-command="about">about</a>
            <a href="#" data-command="experience">experience</a>
            <a href="#" data-command="education">education</a>
            <a href="#" data-command="skills">skills</a>
            <a href="#" data-command="projects">projects</a>
            <a href="#" data-command="awards">awards</a>
            <a href="#" data-command="certifications">certifications</a>
            <a href="#" data-command="contact">contact</a>
        </div>
    `,
    
    help: `
        <div class="command-output">
            <div class="block">
                <p class="section-title" style="margin-top: 1.5rem; color: #ff6b6b;">Available commands:</p>
                <ul>
                    <li><span style="color: var(--accent-color);">about</span> - Learn about Trần Đình Hào</li>
                    <li><span style="color: var(--accent-color);">experience</span> - View work experience</li>
                    <li><span style="color: var(--accent-color);">education</span> - Academic background</li>
                </ul>
            </div>
            <div class="block">
                <ul>
                    <li><span style="color: var(--accent-color);">skills</span> - Technical skills</li>
                    <li><span style="color: var(--accent-color);">projects</span> - View projects</li>
                    <li><span style="color: var(--accent-color);">awards</span> - Awards and achievements</li>
                    <li><span style="color: var(--accent-color);">certifications</span> - Professional certifications</li>
                    <li><span style="color: var(--accent-color);">contact</span> - Contact information</li>
                </ul>
            </div>
            <div class="block">
                <ul>
                    <li><span style="color: var(--accent-color);">ls</span> - List all commands</li>
                    <li><span style="color: var(--accent-color);">clear</span> - Clear the terminal</li>
                    <li><span style="color: var(--accent-color);">help</span> - Show this help message</li>
                </ul>
            </div>
        </div>
    `
};

let currentInput = '';
const inputText = document.getElementById('inputText');
const terminalOutput = document.getElementById('output');
const cursor = document.getElementById('cursor');
let isTypingAnimation = false;
let userCanType = false;

// Smooth block-by-block reveal
async function revealContent(container, htmlString) {
    isTypingAnimation = true;
    
    // Get terminal content element
    const terminalContent = document.querySelector('.terminal-content');
    
    // Parse HTML
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = htmlString;
    
    // Create output container
    const outputDiv = document.createElement('div');
    container.appendChild(outputDiv);
    
    // Get all blocks (wrapped in .block class)
    const blocks = tempDiv.querySelectorAll('.block');
    
    if (blocks.length > 0) {
        // Process blocks
        for (const block of blocks) {
            // Save current scroll position
            const currentScrollTop = terminalContent.scrollTop;
            
            const blockClone = document.createElement('div');
            blockClone.style.opacity = '0';
            blockClone.style.transform = 'translateY(20px)';
            
            // Copy all content from block
            blockClone.innerHTML = block.innerHTML;
            outputDiv.appendChild(blockClone);
            
            // Restore scroll position to prevent auto-scroll
            terminalContent.scrollTop = currentScrollTop;
            
            // Add click handlers for any links
            blockClone.querySelectorAll('a[data-command]').forEach(link => {
                link.addEventListener('click', handleLinkClick);
            });
            
            // Animate in smoothly
            await new Promise(resolve => setTimeout(resolve, 50));
            blockClone.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out';
            blockClone.style.opacity = '1';
            blockClone.style.transform = 'translateY(0)';
            
            // Wait before showing next block (smoother)
            await new Promise(resolve => setTimeout(resolve, 250));
        }
    } else {
        // Fallback for non-blocked content (like nav-links)
        const children = Array.from(tempDiv.children);
        for (const child of children) {
            const currentScrollTop = terminalContent.scrollTop;
            
            const clone = child.cloneNode(true);
            clone.style.opacity = '0';
            clone.style.transform = 'translateY(20px)';
            outputDiv.appendChild(clone);
            
            terminalContent.scrollTop = currentScrollTop;
            
            // Add click handlers
            clone.querySelectorAll('a[data-command]').forEach(link => {
                link.addEventListener('click', handleLinkClick);
            });
            
            await new Promise(resolve => setTimeout(resolve, 40));
            clone.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out';
            clone.style.opacity = '1';
            clone.style.transform = 'translateY(0)';
            
            await new Promise(resolve => setTimeout(resolve, 180));
        }
    }
    
    isTypingAnimation = false;
}

// Link click handler -> run common transition
async function handleLinkClick(e) {
    e.preventDefault();
    e.stopPropagation();
    const command = e.currentTarget.getAttribute('data-command');
    await runCommandWithTransition(command);
}

// Common transition for both click and manual typing
async function runCommandWithTransition(command, options = {}) {
    if (!userCanType || isTypingAnimation) return;
    if (!command) return;

    const { skipBackspace = false, skipRetype = false } = options;
    
    isTypingAnimation = true;
    
    // Step 1: If there's existing content, clear it and backspace current input
    const hasOldContent = terminalOutput.querySelector('.command-history') || terminalOutput.querySelector('.command-output');
    if (hasOldContent) {
        // Backspace animation on current input (optional)
        if (!skipBackspace && currentInput) {
            while (currentInput.length > 0) {
                currentInput = currentInput.slice(0, -1);
                inputText.textContent = currentInput;
                await new Promise(resolve => setTimeout(resolve, 30));
            }
            await new Promise(resolve => setTimeout(resolve, 200));
        }
        
        // Clear terminal before new command
        clearTerminal();
        await new Promise(resolve => setTimeout(resolve, 300));
    }
    
    // Step 2: Type out the new command unless skipping retype
    if (!skipRetype) {
        currentInput = '';
        inputText.textContent = '';
        for (let i = 0; i < command.length; i++) {
            currentInput += command[i];
            inputText.textContent = currentInput;
            await new Promise(resolve => setTimeout(resolve, 60));
        }
        await new Promise(resolve => setTimeout(resolve, 300));
    }
    
    // Step 3: Execute the command
    executeCommand(command);
    currentInput = '';
    inputText.textContent = '';
    
    isTypingAnimation = false;
}

// Typing animation for page load
async function typeText(element, text, speed = 30) {
    isTypingAnimation = true;
    element.innerHTML = '';
    element.style.opacity = '1';
    
    for (let i = 0; i < text.length; i++) {
        if (text[i] === '\n') {
            element.innerHTML += '<br>';
        } else {
            element.innerHTML += text[i];
        }
        await new Promise(resolve => setTimeout(resolve, speed));
    }
    
    isTypingAnimation = false;
}

// Initial page load animation
async function initTypingAnimation() {
    const headline = document.querySelector('.page-header .headline');
    const subtitle = document.querySelector('.page-header .subtitle');
    const promptLine = document.querySelector('.prompt-line');
    const navLinks = document.querySelectorAll('.nav-links a');
    const inputLine = document.querySelector('.input-line');
    
    // Initial pause - smoother start
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // Show headline
    headline.classList.remove('hidden');
    await typeText(headline, 'Trần Đình Hào', 60);
    
    // Show subtitle
    await new Promise(resolve => setTimeout(resolve, 300));
    subtitle.style.transition = 'opacity 0.5s ease-out';
    subtitle.classList.remove('hidden');
    
    // Longer pause after headline
    await new Promise(resolve => setTimeout(resolve, 600));
    
    // Smoother prompt line appearance
    promptLine.style.transition = 'opacity 0.3s ease-out';
    promptLine.classList.remove('hidden');
    
    // Pause before nav links
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // Slower nav links appearance
    for (const link of navLinks) {
        link.style.transition = 'opacity 0.2s ease-out';
        link.classList.remove('hidden');
        await new Promise(resolve => setTimeout(resolve, 100));
    }
    
    // Show input line last with smoother transition
    await new Promise(resolve => setTimeout(resolve, 400));
    inputLine.style.transition = 'opacity 0.4s ease-out';
    inputLine.classList.remove('hidden');
    
    userCanType = true;
}

// Prevent text selection
document.addEventListener('selectstart', (e) => {
    if (e.target.tagName !== 'A' && !e.target.closest('.command-output')) {
        e.preventDefault();
    }
});

// Focus handling
document.addEventListener('click', (e) => {
    if (e.target.tagName !== 'A' && userCanType && !isTypingAnimation) {
        document.body.focus();
    }
});

// Keyboard input
document.addEventListener('keydown', async (e) => {
    if (isTypingAnimation || !userCanType) {
        if (e.key !== 'Tab') {
            e.preventDefault();
        }
        return;
    }
    
    if (e.target.tagName === 'A') return;

    if (['Enter', 'Backspace', 'Tab'].includes(e.key)) {
        e.preventDefault();
    }

    if (e.key === 'Enter') {
        const cmd = currentInput.trim();
        await runCommandWithTransition(cmd, { skipBackspace: true, skipRetype: true });
        currentInput = '';
        inputText.textContent = '';
    } else if (e.key === 'Backspace') {
        currentInput = currentInput.slice(0, -1);
        inputText.textContent = currentInput;
    } else if (e.key === 'Tab') {
        const possibleCommands = Object.keys(commands).filter(cmd => 
            cmd.startsWith(currentInput.toLowerCase())
        );
        if (possibleCommands.length === 1) {
            currentInput = possibleCommands[0];
            inputText.textContent = currentInput;
        }
    } else if (e.key === 'l' && (e.ctrlKey || e.metaKey)) {
        e.preventDefault();
        clearTerminal();
        currentInput = '';
        inputText.textContent = '';
    } else if (e.key === 'c' && (e.ctrlKey || e.metaKey)) {
        e.preventDefault();
        currentInput = '';
        inputText.textContent = '';
    } else if (e.key.length === 1 && !e.ctrlKey && !e.metaKey && !e.altKey) {
        currentInput += e.key;
        inputText.textContent = currentInput;
    }
});

// Execute command
async function executeCommand(cmd) {
    if (!cmd) return;

    // Add command to history
    const commandLine = document.createElement('div');
    commandLine.className = 'prompt-line command-history';
    commandLine.innerHTML = `
        <span class="prompt-path">/dev/trandinhhao</span>
        <span class="prompt-symbol">&gt;</span>
        <span class="user-command">${escapeHtml(cmd)}</span>
    `;
    // Preserve current scroll inside terminal-content to avoid jump
    const terminalContent = document.querySelector('.terminal-content');
    const prevScrollTop = terminalContent ? terminalContent.scrollTop : 0;
    terminalOutput.appendChild(commandLine);
    if (terminalContent) terminalContent.scrollTop = prevScrollTop;

    // Execute command
    if (cmd === 'clear') {
        clearTerminal();
        return;
    }

    const cmdLower = cmd.toLowerCase();
    if (commands[cmdLower]) {
        await revealContent(terminalOutput, commands[cmdLower]);
    } else {
        // Unknown command: reset terminal to initial state (prompt + links)
        clearTerminal();
    }
}

// Clear terminal
function clearTerminal() {
    terminalOutput.innerHTML = `
        <div class="prompt-line">
            <span class="prompt-path">/dev/trandinhhao</span>
            <span class="prompt-symbol">&gt;</span>
            <span class="prompt-command">ls</span>
        </div>
        
        <div class="nav-links">
            <a href="#" data-command="about">about</a>
            <a href="#" data-command="experience">experience</a>
            <a href="#" data-command="education">education</a>
            <a href="#" data-command="skills">skills</a>
            <a href="#" data-command="projects">projects</a>
            <a href="#" data-command="awards">awards</a>
            <a href="#" data-command="certifications">certifications</a>
            <a href="#" data-command="contact">contact</a>
        </div>
    `;
    
    // Scroll terminal content to top
    const terminalContent = document.querySelector('.terminal-content');
    if (terminalContent) {
        terminalContent.scrollTop = 0;
    }
    
    addLinkHandlers();
}

// Add click handlers to all command links
function addLinkHandlers() {
    document.querySelectorAll('a[data-command]').forEach(link => {
        link.addEventListener('click', handleLinkClick);
    });
}

// Escape HTML
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Initialize
window.addEventListener('load', async () => {
    document.body.setAttribute('tabindex', '-1');
    await initTypingAnimation();
    addLinkHandlers();
    document.body.focus();
});