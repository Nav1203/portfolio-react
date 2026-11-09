from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, HRFlowable, KeepTogether
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER
from reportlab.lib.pagesizes import A4
from reportlab.lib.units import mm

OUT = 'public/Navaneeth_resume.pdf'
blue=colors.HexColor('#1d4ed8'); dark=colors.HexColor('#111827'); body=colors.HexColor('#334155')
styles={
 'name':ParagraphStyle('name',fontName='Helvetica-Bold',fontSize=20,leading=23,alignment=TA_CENTER,textColor=dark,spaceAfter=2),
 'subtitle':ParagraphStyle('subtitle',fontName='Helvetica-Bold',fontSize=10,leading=13,alignment=TA_CENTER,textColor=blue),
 'contact':ParagraphStyle('contact',fontName='Helvetica',fontSize=8,leading=11,alignment=TA_CENTER,textColor=body),
 'section':ParagraphStyle('section',fontName='Helvetica-Bold',fontSize=9.2,leading=11,textColor=blue,spaceBefore=7,spaceAfter=3),
 'body':ParagraphStyle('body',fontName='Helvetica',fontSize=10,leading=14,textColor=body,spaceAfter=2),
 'bullet':ParagraphStyle('bullet',fontName='Helvetica',fontSize=10,leading=14,textColor=body,leftIndent=10,firstLineIndent=-8,spaceAfter=2),
 'role':ParagraphStyle('role',fontName='Helvetica-Bold',fontSize=10,leading=13,textColor=dark,spaceBefore=3),
 'pub':ParagraphStyle('pub',fontName='Helvetica',fontSize=9.7,leading=13.5,textColor=body,spaceAfter=2),
}
story=[]
def P(t,k='body'): story.append(Paragraph(t,styles[k]))
def section(t):
 P(t,'section'); story.append(HRFlowable(width='100%',thickness=.5,color=colors.HexColor('#c7d9ff'),spaceAfter=3))
def bullet(t): P('<font color="#2563eb">-</font> '+t,'bullet')
P('NAVANEETH AMARNATH','name')
P('Research Scientist L2 at Infrrd','subtitle')
P('+91-9188590190  |  <link href="mailto:navaneethamarnath@gmail.com" color="#2563eb">navaneethamarnath@gmail.com</link>  |  Bangalore, India','contact')
P('<link href="https://github.com/Nav1203" color="#2563eb">github.com/Nav1203</link>  |  <link href="https://navaneethamarnath.com" color="#2563eb">navaneethamarnath.com</link>  |  <link href="https://www.linkedin.com/in/navaneeth-amarnath/" color="#2563eb">linkedin.com/in/navaneeth-amarnath</link>','contact')
story.append(Spacer(1,3)); story.append(HRFlowable(width='100%',thickness=1,color=blue))
section('PROFILE')
P('Research Scientist specializing in agentic automation, large language models, and document intelligence, with end-to-end ownership of deployed systems and research pipelines.')
section('WORK EXPERIENCE')
P('Research Scientist L2 | Infrrd <font color="#64748b">&nbsp;&nbsp; Apr 2026 - Present</font>','role')
bullet('Designed and built a mortgage quality control agent from proof of concept through deployment for live post-closing review.')
bullet('Developed a harness that guides the agent through a loan represented as an environment to produce a three-class classification, complementing static workflows with autonomous processing.')
bullet('Ported an internal agentic workflow framework from AutoGen to Claude Agent SDK, adopting a harness-based architecture to support greater autonomy.')
P('Research Scientist L1 | Infrrd <font color="#64748b">&nbsp;&nbsp; Jul 2024 - Mar 2026</font>','role')
bullet('Independently designed and developed a multi-agent framework that plans, designs, codes, and tests executable workflows from business rules; applied it to mortgage underwriting research.')
bullet('Developed a document classification pipeline using bi-encoder models.')
bullet('Built evaluation frameworks and benchmarking pipelines for ML and LLM applications.')
bullet('Created an LLM-as-a-judge feedback pipeline to iteratively refine document extraction prompts.')
bullet('Built business-data chatbots and worked on text extraction from engineering diagrams.')
P('Research - ML Intern | Infrrd <font color="#64748b">&nbsp;&nbsp; Jun 2023 - Jul 2024</font>','role')
bullet('Fine-tuned compact language models for named entity recognition and built datasets and evaluation pipelines for ML research.')
bullet('Built retrieval-augmented generation systems for domain knowledge and few-shot example selection.')
bullet('Developed a chat application for extracting structured data from PDF documents.')
section('PUBLICATIONS')
P('<b>Planning Agent Assisted Static Workflow Generation for Mortgage Underwriting Automation.</b> S. Nakshathri, <b>N. Amarnath</b>, M. N, P. Rasamsetty and D. Kumar. IEEE COMPSAC, 2026, pp. 2392-2399.','pub')
P('<b>Multi-Stage Retriever Model for Document Classification Using Fine Tuned Embedding Model.</b> <b>N. Amarnath</b>, S. Tallam, P. Rasamsetty and D. Kumar. IEEE CCWC, 2025, pp. 209-218.','pub')
P('<b>Infrrd.ai at SemEval-2024 Task 7: RAG-based end-to-end training to generate headlines and numbers.</b> J. He, S. Tallam, S. Nakshathri, <b>N. Amarnath</b>, P. Kr and D. Kumar. SemEval, 2024, pp. 940-951.','pub')
section('EDUCATION')
P('<b>B.Tech, Computer Science and Engineering</b> | Vellore Institute of Technology, Chennai | 2024<br/>Specialization: AI and Robotics | CGPA: 8.43<br/>Top 10, Bajaj Finserv HackRx 4.0 (2023)')
section('SKILLS')
P('<b>Methods:</b> Agentic automation, LLM applications, retrieval-augmented generation, model evaluation, prompt engineering, computer vision<br/><b>Tools:</b> Python, PyTorch, TensorFlow, LangGraph, CrewAI, Claude Agent SDK, AutoGen, LangChain, Transformers, PEFT, MongoDB, SQL')
section('LANGUAGES')
P('English  -  Hindi  -  Malayalam')
SimpleDocTemplate(OUT,pagesize=A4,leftMargin=45,rightMargin=45,topMargin=28,bottomMargin=25,title='Navaneeth Amarnath - Resume').build(story)
