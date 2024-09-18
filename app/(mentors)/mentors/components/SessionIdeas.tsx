import React from 'react';
import GeneralSectionHeader from './GeneralSectionHeader';
import EventItem from './EventItem';

const SessionIdeas: React.FC = () => {
  const events = [
    {
        date: 'May 15',
        title: 'From Lab to Market',
        imageUrl: 'https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2F3ff6c0f73a345f1694be463336f9036c.cdn.bubble.io%2Ff1713956075202x336649362902442300%2FDALL%25C2%25B7E%25202024-04-24%252010.38.25%2520-%2520A%2520painting-style%2520illustration%2520for%2520a%2520YouTube%2520thumbnail%252C%2520representing%2520the%2520theme%2520%2527From%2520Lab%2520to%2520Market%252C%2520cultivated%2520meat%2527.%2520The%2520scene%2520should%2520depict%2520a%2520high-te.jpg?w=1536&h=&auto=compress&dpr=1&fit=max',
        isOnline: true,
        slots: 20,
        slug: 'from-lab-to-market'
    },
    {
        date: 'May 20',
        title: 'Intro to Web3',
        imageUrl: 'https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2F3ff6c0f73a345f1694be463336f9036c.cdn.bubble.io%2Ff1713955407170x891192272137911800%2FDALL%25C2%25B7E%25202024-04-24%252013.16.31%2520-%2520A%2520digitally%2520illustrated%252C%2520futuristic%2520depiction%2520of%2520the%2520Web3%2520ecosystem.%2520The%2520image%2520showcases%2520an%2520immersive%252C%2520digital%2520city%2520where%2520blockchain%2520technology%2520powers.webp?w=512&h=&auto=compress&dpr=1&fit=max',
        isOnline: true,
        slots: 15,
        slug: 'intro-to-web3'
    },
    {
        date: 'May 25',
        title: 'The Future of Biotechnology',
        imageUrl: 'https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2F3ff6c0f73a345f1694be463336f9036c.cdn.bubble.io%2Ff1713955425673x322722837028739400%2FDALL%25C2%25B7E%25202024-04-24%252010.47.19%2520-%2520A%2520futuristic%2520concept%2520art%2520representing%2520the%2520future%2520of%2520biotechnology%252C%2520featuring%2520a%2520high-tech%2520laboratory%2520with%2520scientists%2520working%2520on%2520advanced%2520genetic%2520engine.webp?w=512&h=&auto=compress&dpr=1&fit=max',
        isOnline: true,
        slots: 18,
        slug: 'future-of-biotechnology'
    },
    {
        date: 'Jun 1',
        title: 'From Student to Entrepreneur',
        imageUrl: 'https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2F3ff6c0f73a345f1694be463336f9036c.cdn.bubble.io%2Ff1713955483856x505274220358671100%2FDALL%25C2%25B7E%25202024-04-24%252013.24.07%2520-%2520A%2520digitally%2520illustrated%2520depiction%2520of%2520%2527Personal%2520Career%2520Development%2520Path%2527%2520with%2520a%2520greenish%2520hue%252C%2520symbolizing%2520growth%2520and%2520renewal.%2520The%2520scene%2520traces%2520a%2520studen.webp?w=512&h=&auto=compress&dpr=1&fit=max',
        isOnline: true,
        slots: 25,
        slug: 'student-to-entrepreneur'
    },
    {
        date: 'Jun 5',
        title: 'Quantum Computing',
        imageUrl: 'https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2F3ff6c0f73a345f1694be463336f9036c.cdn.bubble.io%2Ff1713955506576x467325530415857200%2FDALL%25C2%25B7E%25202024-04-24%252013.14.23%2520-%2520A%2520digitally%2520illustrated%252C%2520cutting-edge%2520depiction%2520of%2520%2527Quantum%2520Computing%2527.%2520The%2520artwork%2520portrays%2520an%2520advanced%2520quantum%2520computer%2520with%2520a%2520visually%2520striking%2520des.webp?w=512&h=&auto=compress&dpr=1&fit=max',
        isOnline: true,
        slots: 20,
        slug: 'quantum-computing'
    },
    {
        date: 'Jun 10',
        title: 'Future of Work',
        imageUrl: 'https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2F3ff6c0f73a345f1694be463336f9036c.cdn.bubble.io%2Ff1713955555436x502992772284557950%2FDALL%25C2%25B7E%25202024-04-24%252013.13.28%2520-%2520A%2520digitally%2520illustrated%252C%2520vibrant%2520scene%2520depicting%2520%2527The%2520Future%2520of%2520Work%2527.%2520The%2520artwork%2520portrays%2520a%2520modern%252C%2520open-plan%2520office%2520filled%2520with%2520diverse%2520workers%2520eng.webp?w=512&h=&auto=compress&dpr=1&fit=max',
        isOnline: true,
        slots: 30,
        slug: 'future-of-work'
    },
    {
        date: 'Jun 15',
        title: 'Personal Career Development Path',
        imageUrl: 'https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2F3ff6c0f73a345f1694be463336f9036c.cdn.bubble.io%2Ff1713955629308x710017508099198600%2FDALL%25C2%25B7E%25202024-04-24%252013.23.20%2520-%2520A%2520digitally%2520illustrated%252C%2520aspirational%2520depiction%2520of%2520%2527Personal%2520Career%2520Development%2520Path%2527.%2520The%2520scene%2520illustrates%2520a%2520student%2527s%2520progression%2520from%2520academic%2520stu.webp?w=512&h=&auto=compress&dpr=1&fit=max',
        isOnline: true,
        slots: 25,
        slug: 'personal-career-development'
    },
    {
        date: 'Jun 20',
        title: 'The Future of AI',
        imageUrl: 'https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2F3ff6c0f73a345f1694be463336f9036c.cdn.bubble.io%2Ff1713955682980x473925276452372500%2FDALL%25C2%25B7E%25202024-04-24%252013.20.20%2520-%2520A%2520digitally%2520illustrated%252C%2520expansive%2520view%2520of%2520%2527The%2520Future%2520of%2520AI%2527.%2520The%2520scene%2520shows%2520an%2520advanced%2520technological%2520society%2520where%2520AI%2520is%2520at%2520the%2520core%2520of%2520all%2520functi.webp?w=512&h=&auto=compress&dpr=1&fit=max',
        isOnline: true,
        slots: 20,
        slug: 'future-of-ai'
    },
    {
        date: 'Jun 25',
        title: 'E-Governance and Digital',
        imageUrl: 'https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2F3ff6c0f73a345f1694be463336f9036c.cdn.bubble.io%2Ff1713957356822x738405565209776500%2FDALL%25C2%25B7E%25202024-04-24%252013.20.28%2520-%2520A%2520digitally%2520illustrated%252C%2520dynamic%2520depiction%2520of%2520%2527The%2520Future%2520of%2520AI%2527.%2520The%2520image%2520showcases%2520a%2520technologically%2520advanced%2520world%2520where%2520artificial%2520intelligence%2520i.webp?w=512&h=&auto=compress&dpr=1&fit=max',
        isOnline: true,
        slots: 25,
        slug: 'e-governance-and-digital'
    }
];


  return (
    <div >
      <div className="mb-5"> {/* Added margin-bottom of 20px */}
        <GeneralSectionHeader
          title="Session Ideas"
          description="Explore upcoming mentorship sessions and innovative topics"
          variant="small"
        />
      </div>
      <div className="bubble-element Group cnaSaaS bubble-r-container" style={{
        overflow: 'visible',
        borderRadius: '0px',
        opacity: 1,
        alignSelf: 'center',
        minWidth: '0px',
        maxWidth: '1200px',
        order: 36,
        minHeight: '0px',
        height: 'max-content',
        width: '100%',
        margin: '0px',
        zIndex: 3
      }}>
        <div className="bubble-element RepeatingGroup cnaSip" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '24px',
          alignContent: 'flex-start',
          borderStyle: 'solid',
          borderWidth: '0px',
          borderColor: 'rgba(var(--color_text_default_rgb), 0.15)',
          borderRadius: '0px',
          opacity: 1,
          minWidth: '280px',
          maxWidth: '1200px',
          order: 3,
          minHeight: '0px',
          height: 'max-content',
          width: '100%',
          margin: '0px',
          zIndex: 10
        }}>
          {events.map((event, index) => (
            <div key={index} className="bubble-element group-item" style={{
              minWidth: '300px',
              minHeight: '220px',
              boxSizing: 'border-box'
            }}>
              <EventItem {...event} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SessionIdeas;