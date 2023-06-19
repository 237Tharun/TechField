import { useNavigate } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import './project.css';
const About =()=>{
    let nav=useNavigate()
    const goh =()=>{
        nav('/Home')
    }
    const goc =()=>{
        nav('/Courses')
    }
    const inter =()=>{
        nav('/Interview_Prep')
    }
    const about =()=>{
        nav('/About')
    }
    const contact =()=>{
        nav('/Contac_Us')
    }
    return(
        <div className='bg1'>
        <div className='beside'><h1 className='h1'>| Tech Feild | <sub>Learn Upto Technical</sub></h1></div>
            <div className='beside1'><input type='search' placeholder='search here...' className='search'></input></div>
            <div className='bg'>
            <ul>
                <li onClick={goh}>Home</li>
                <li onClick={goc}>courses</li>
                <li onClick={inter}>Interview Prep</li>
                <li onClick={about}>About</li>
                <li onClick={contact}>Contact us</li>
            </ul>
            <Avatar className='avatar' src="/broken-image.jpg" sx={{ width: 50, height: 50 }} />
            </div>
            <div className='bg8'>
                <center>
                <h1><h1>About</h1></h1>
                </center><br></br><br></br>
                <div className='about'>
                    <h1>Best Online Learning Platforms-Starting off on the Right Foot</h1><br></br>
                <p>Since the technology revolution of the late 1990s, online learning has been gaining popularity as a method for training and instruction. It offers unparalleled convenience, flexibility, and affordability in a world that’s becoming increasingly expensive and busy. 

And everyone’s jumping on the bandwagon now, especially with no end in sight to COVID. With this demand, online learning platforms have become one of the most coveted products on the global market. But choosing the right platform is no small feat! There are infinite options, each with its own set of unique features. 

That’s why, whether you’re a business hoping to train employees, or you work in the academic sector, we’ve got you covered! Keep reading to find out what the best online learning platforms are. In this article, you’ll find a detailed description of each platform, its pros and cons, pricing, why we included it on our list, and who it is the best fit for.</p>
<br></br>
<h1>What is Learning platform?</h1><br></br>
<p>
An online learning platform is a digital space that allows course creators to market, sell, and deliver their eLearning courses. They’re often referred to as “online course marketplaces.” Like traditional schools, such platforms offer learners a safe environment in which to learn, access course materials, and, in many cases, interact with both teachers and students alike. They offer a wide range of features, including, but not limited to lectures, assignments, quizzes, learning interactions, completion certificates, and social forums/chats.

So, in a way, “learning platform” is kind of a catchall term for both businesses and learners. They help you create, catalog, market, and accept payment for your courses, while also providing all the tools and educational resources that learners need under one roof.</p>
<br></br>
<h1>Online Learning Platforms vs. Online Course Platforms vs. LMS</h1><br></br>
<p>It’s easy to conflate online learning platforms with online course platforms and LMSs. But it’s worth making the distinction. Let’s start with online learning platforms. 
<br></br><br></br>As mentioned, an online learning platform is more of a marketplace. It focuses on the perspective of learners or “buyers.” That’s because online learning platforms do much of the heavy lifting when it comes to marketing your courses, growing your audience, and building your sales funnel. So here, the priority is the front-end part of your business – the course marketplace, as well as the courses themselves. 
<br></br><br></br>
However, this heavy lifting comes at a cost. For example, if you’re looking for maximum flexibility with pricing structure and functionality in terms of collecting and analyzing user data, then you’re going to be relatively constrained. That is especially so if you’d like to personalize your online courses with adequate branding.<br></br><br></br>In contrast, online course platforms focus more on the back-end portion of things. They often involve instructor-focused, cloud-based software that enables you to not only create courses, but effective learning environments. For example, you can upload various types of learning materials and arrange them into learning paths. 
<br></br><br></br>
Many course platforms also let you set up your own marketplace – that is, your own sales funnels, pricing plans, memberships, and revenue. Not to mention that you gain control over invaluable user analytics, branding, and marketing strategies to maximize the growth of your business. 
<br></br><br></br>
As for learning management systems (LMSs), they’re less focused on sales and marketing and more focused on seamlessly delivering training to large groups of learners, employees, or partners, for example.
<br></br><br></br>
Compared with online educational learning platforms, many LMSs have built-in course authoring capabilities, enabling you to create new online courses. Besides, LMSs allow you to manage users, assign content to them, and track learner progress – all under one roof. 
<br></br><br></br>
All in all, you can think of LMSs as representing a higher tier of course platforms. They offer you extra freedom and flexibility in terms of the types of courses you can create and the level of interaction you can incorporate.
<br></br><br></br>Understanding the difference between online learning platforms, online course platforms, and LMSs will help you narrow down options within the vast sea of eLearning products. But even once you’ve settled on a specific platform type, there are still many choices to sift through. Continue reading to find out what they are.</p>
            </div>

            </div>
        </div>
    )
}
export default About;