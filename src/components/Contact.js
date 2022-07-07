import React from "react";
import { MdMarkEmailRead } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import {
	RiWhatsappFill,
	RiFacebookCircleFill,
	RiInstagramFill,
	RiYoutubeFill,
	RiTelegramFill,
	RiTwitterFill,
} from "react-icons/ri";

const Contact = () => {
	return (
		<div className="contact">
			<div className="contact-grid">
				<div className="map">
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59068.78314314857!2d70.73040993125001!3d22.285604599999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959cbcfbf3590c7%3A0x870745a27a0d4034!2sSHRI%20AMBIKA%20TOOLS!5e0!3m2!1sen!2sin!4v1655460331814!5m2!1sen!2sin"
						width="600"
						height="450"
						allowfullscreen=""
						referrerpolicy="no-referrer-when-downgrade"
					></iframe>
				</div>
				<div className="epa">
					<div className="address">
						<a
							href="https://goo.gl/maps/CE3bwcdsyUN911si8"
							target={"_blank"}
						>
							<HiLocationMarker /> 16, Bhaktinagar Station Plot,
							Ambika Weighbridge Street, Rajkot - 360002
						</a>
					</div>
					<div className="ep">
						<div className="email">
							<a href="mailto:satrajkot@outlook.com">
								<MdMarkEmailRead /> satrajkot@outlook.com
							</a>
						</div>
						<div className="phone">
							<a href="tel:919427213631">
								<FaPhoneAlt /> +91-94272-13631
							</a>
						</div>
					</div>
				</div>
			</div>
			<div className="social-links-grid">
				<div className="social-media-links">
					<a href="#">
						<RiWhatsappFill className="social-media-whatsapp" />
					</a>
				</div>
				<div className="social-media-links">
					<a href="#">
						<RiFacebookCircleFill className="social-media-facebook" />
					</a>
				</div>
				<div className="social-media-links">
					<a href="#">
						<RiInstagramFill className="social-media-instagram" />
					</a>
				</div>
				<div className="social-media-links">
					<a href="#">
						<RiYoutubeFill className="social-media-youtube" />
					</a>
				</div>
				<div className="social-media-links">
					<a href="#">
						<RiTwitterFill className="social-media-twitter" />
					</a>
				</div>
				<div className="social-media-links">
					<a href="#">
						<RiTelegramFill className="social-media-telegram" />
					</a>
				</div>
			</div>
		</div>
	);
};

export default Contact;
