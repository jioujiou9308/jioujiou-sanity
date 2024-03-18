import {defineField, defineType} from 'sanity'
import {DoorsOpenInput} from './components/DoorsOpenInput'
import React from 'react'
import {UsersIcon} from '@sanity/icons'
export const eventType = defineType({
  name: 'event',
  title: 'Event',
  type: 'document',
  groups: [
    {name: 'details', title: 'Details', icon: UsersIcon, default: true},
    {name: 'editorial', title: 'Editorial'},
  ],
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      group: 'details',
      description: (
        <details>
          <summary>Why is this important?</summary>
          The Googlebot is an indexer of...
        </details>
      ),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {source: 'name'},
      group: 'details',
    }),
    defineField({
      name: 'date',
      type: 'datetime',
      group: ['details', 'editorial'],
    }),
    defineField({
      name: 'doorsOpen',
      description: 'Number of minutes before the start time for admission',
      type: 'number',
      initialValue: 60,
      components: {
        input: DoorsOpenInput,
      },
    }),
    defineField({
      name: 'venue',
      type: 'reference',
      to: [{type: 'venue'}],
    }),
    defineField({
      name: 'headline',
      type: 'reference',
      to: [{type: 'artist'}],
    }),
    defineField({
      title: 'TITLE IMAGE',
      name: 'image',
      type: 'image',
    }),
    defineField({
      name: 'details',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'tickets',
      type: 'url',
    }),
  ],
  // Update the preview key in the schema
  preview: {
    select: {
      name: 'name',
      venue: 'venue.name',
      artist: 'headline.name',
      date: 'date',
      image: 'image',
    },
    prepare({name, venue, artist, date, image}) {
      const nameFormatted = name || 'Untitled event'
      const dateFormatted = date
        ? new Date(date).toLocaleDateString(undefined, {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
          })
        : 'No date'

      return {
        title: artist ? `${nameFormatted} (${artist})` : nameFormatted,
        subtitle: venue ? `${dateFormatted} at ${venue}` : dateFormatted,
        media: image,
      }
    },
  },
})
