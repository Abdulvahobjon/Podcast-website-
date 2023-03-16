import React from 'react'

export default function EpisodeItem(props) {
    return (
        <tr className="border-b border-gray-500">
            <td className="p-3">{props.title}</td>
            <td className="p-3">{props.date}</td>
            <td className="p-3">
                <a target="_blank" href={props.link} className="btn-secondary">Listen</a>
            </td>
        </tr>
    )
}
