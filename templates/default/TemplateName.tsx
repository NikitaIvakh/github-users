import React from 'react'
import './templateNameModule.scss'

interface TemplateNameProps {}

export const TemplateName = ({}: TemplateNameProps) => (
	<div className='templateName' data-testid='TemplateName'>
		TemplateName Component
	</div>
)
