import React from "react";
import PropTypes from "prop-types";
import {Card} from "antd";
import moment from "moment";

import "antd/dist/antd.css";
import "../static/styles/Question.css";

export default class Question extends React.Component {
	render() {
		const {title, authorId, tags, createdAt, body} = this.props.data;
		const tagsList = tags.map(tag => tag.name).join(", ");

		return (
			<Card className="question_card">
				<div className="question_card__meta">
					<h4 className="question_card__meta__title">{title}</h4>
					<span className="question_card__meta__creation">posted {moment(createdAt).fromNow()} by {authorId.name}</span>
				</div>
				<div className="question_card__body">
					<span>{body}</span>
				</div>
				{tagsList ?
					<div className="question_card__tags">
						<span>Tags: {tagsList}</span>
					</div> :
					null}
			</Card>
		);
	}
}

Question.propTypes = {
	data: PropTypes.object.isRequired
};
