import './ContactSection.scss';
import HexLattice from '../../assets/images/Contact HEX LATTICE.svg?react';
import contacts from '../../data/Contacts';

const ContactSection = () => {
    return (
        <div id="contact" className='contact-section'>
            <div className='contact-section__header'>
                <h2 className='contact-section__header__title'>CONTACT</h2>
                <div className='contact-section__header__img'>
                    <HexLattice />
                </div>
            </div>
            <div className='contact-section__content'>
                {contacts.map((contact, index) => (
                    <div key={index} className='contact-section__content__contacts'>
                        <a href={contact.link} target='_blank' rel='noreferrer'>
                            <img src={contact.logo} alt={contact.name} />
                        </a>
                    </div>
                ))}
                    
            </div>
        </div>
    );
}

export default ContactSection;

