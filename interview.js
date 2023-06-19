import { useNavigate } from 'react-router-dom';
import { Avatar } from '@mui/material';
import './project.css';
import ReactPlayer from 'react-player';
import { useRef } from 'react';
const VIDEO_PATH = 'https://www.youtube.com/watch?v=QQpsFHf-UK8'
const Interview =()=>{
    const playerref=useRef(null);
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
                <h1><h1>Interview preparation</h1></h1><br></br><br></br><br></br>
                </center>
                <div style={{paddingLeft:'450px'}}><ReactPlayer ref={playerref} url={VIDEO_PATH} controls={true}></ReactPlayer></div><br></br><br></br>
        <div className='about'>
            <h1>PREPARING FOR AN INTERVIEW</h1><br></br> 
<h2>BEFORE THE INTERVIEW</h2>
<p>▪ Research the company and position description by using their company website, CEO resources, LinkedIn, and networking with 
contacts and employees. Glassdoor and Vault are great resources, which, accessed through the CEO’s website provide full access.</p>
<p>▪ Be prepared to give specific examples from your experience, education, or skills that are relevant to the job and organization. Use 
the position description as a guide.</p>
<p>▪ Prepare 4-5 relevant questions for the interviewer that focus on the company’s mission and goals (see examples on back).</p>
<p>▪ Practice, practice, practice! Visit the CEO for a mock interview and more information on preparing for an interview.</p>
<p>▪ Create a portfolio with samples of your work, reference letters, awards and other materials that demonstrate your abilities.</p>
<p>▪ Get travel and parking information and an estimated time commitment so that there are no surprises on the interview day.</p><br></br>
<h2>DAY OF THE INTERVIEW</h2>
<p>▪ Make sure that you look professional. It is appropriate to dress more formally for the interview even if the environment is casual.</p> 
<p>▪ Avoid heavy use of scented body products as others may be sensitive to the scent.</p>
<p>▪ Arrive at least fifteen minutes early and be sure to bring money for parking.</p>
<p>▪ Bring a professional looking folder or padfolio with two copies of your resume, list of references, pen, calendar, and notepad.</p>
<p>▪ Demonstrate enthusiasm and interest by making eye contact, smiling, and a firm handshake.</p>
<p>▪ Be courteous to everyone you meet; others not directly in the interview process may be asked to express an opinion about you.</p><br></br>
<h2>DURING THE INTERVIEW</h2>
<p>▪ Give clear and concise answers with specific examples about your past experiences, skills, and abilities that directly relate to the 
position or company goals. Mention your accomplishments whenever possible.</p> 
<p>▪ Clearly articulate your career goals and how they relate to the position.</p>
<p>▪ Avoid talking negatively about past supervisors, co-workers, or companies of employment.</p>
<p>▪ Avoid asking about salary and benefits during the first interview.</p>
<p>▪ Ask at least two of your pre-prepared, well thought out questions to determine if this organization and job is right place for you.</p>
<p>▪ Maintain eye contact and avoid fidgeting during your interview. Calm nerves.</p> 
<p>▪ You need to be fully engaged in this conversation, so turn off your cell phone and do not check it.</p> 
<p>▪ Do not chew gum, eat or drink (unless offered to you). </p>
<p>▪ Be honest and sincere. Just be yourself!</p><br></br>
<h2>AFTER THE INTERVIEW</h2>
<p>▪ Send a thank you letter within two days to the people who interviewed you. Reiterate your interest and some key points that were 
discussed during the interview. You can also use thank you notes to expand on a point that you discussed in the interview or ask 
any additional questions if you have any.</p> 
<p>▪ If a large panel (more than 3 people) interviews you, you may elect to send a thank you note to the chair of the interview 
panel and ask them to convey your thanks, but when possible, send an individual thank you to each interviewer.</p>
<p>▪ Request business cards during your interview to ensure correct spelling of names and email addresses.</p>
<p>▪ Follow up with a phone call within a week if you have not heard back. Be persistent and try to stay optimistic.</p> 
<p>▪ Be sure to send any requested material such as transcripts, applications, or references in a timely manner.</p> 
DRESS FOR SUCCESS
<p>When deciding what to wear, consider your industry’s standard. It is always better to dress a bit more formally if you are unsure. 
Everything should be cleaned, pressed and polished. Visit the CEO Clothing Closet to select a free outfit.</p>
<p>▪ Business Attire: Consists of two-piece suit in black, gray, or navy with a matching shirt/dress. Make sure that clothing is not 
open below the neckline. Ties or stockings may be required in more formal workplaces or industries. Dark closed-toed shoes.</p> 
<p>▪ Business Casual Attire: Can include dress pants/skirt and a shirt/sweater without a jacket. Can also include khaki pants or 
slacks and a nice shirt. Ties and stockings are not usually required.</p> 
<p>▪ Do NOT Wear: revealing clothes, extensive jewelry/piercings or makeup, have exposed tattoos, too much cologne or perfume, 
hats indoors, open toed-toes, headphones, sunglasses, dirty clothing, or any clothing with holes.</p><br></br>
<h2>TYPES OF INTERVIEWS AND TIPS FOR EACH TYPE</h2>
<p>▪ Phone/Screening Interview – Preliminary, brief interview to determine if the candidate should move forward in the process.
o As with every interview, make sure you are enthusiastic and discuss how your skills match the needs of the employer.
o Make sure to keep a copy of your resume close along with notes on the company and your calendar.
o Determine a location with little distractions and background noise ahead of time. Make sure you have good cell service.</p>
<p>▪ In Person Interview - One or more employer representatives will interview the candidate. May be multiple interviews or all day.
o Can include either traditional interview questions or behavioral interview questions. See below for examples.</p> 
<p>▪ Group Interview - Takes place with other candidates seeking the same job, predicts how well the candidates interact with others.
o Try to find a good balance between getting your points across and dominating the conversation.
o Practice a two minute introduction that summarizes your education, skills, experience, and related career goals.</p> 
<p>▪ Panel Interview - Two or more people will interview you to get different opinions. Can be a very intimidating interview format. 
o Be careful not to ignore anyone on the panel. Make eye contact with each person while answering a question.
o When asking questions, make sure they are directed at the group rather than a specific person.</p> 
<p>▪ Videoconferencing or Internet Interview - Usually take place over Skype or other videoconferencing services.
o Dress professionally from head to toe and make sure that your background is not distracting (e.g., white or neutral wall)</p>
<p>▪ Pre-recorded Interview - Usually no direct interaction with a person. Given set of questions and asked to record answers.
o Don’t sound too robotic, rehearsed or rushed. Consider attire and background.</p>
<p>▪ Stress Interview - Designed to see how you react under pressure. Used in fast-paced positions where quick decisions are needed. 
o Focus on the way you solve the problem, not the “right” answer. A typical question is designed to induce stress and can 
appear very aggressive: “Was the stress of your last job too much for you to handle?”</p>
<p>▪ Case Interview - Includes case questions about hypothetical situations. Used to test your analytical and problem-solving ability. 
o Be sure to explain your thinking process in detail to give them a good idea of the steps you take to solve a problem.</p><br></br> 
        </div>
        </div>
        </div>
    )
}
export default Interview;