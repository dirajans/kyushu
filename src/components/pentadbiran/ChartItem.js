import React, { useState } from 'react';
import { StyleSheet, css } from 'aphrodite';
import {
  Avatar,
  Card,
  CardHeader,
  Typography,
  Grid
} from '@material-ui/core';

export default function ChartItem({ people, header }){
  const AvatarComponent = ({ initial }) => {
    return (
      <Avatar aria-label={'a'} className={css(styles.avatar)}>
        {initial}
      </Avatar>
    )
  }

  return (
    <>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
      >
        <Grid item lg={12} align={'center'}>
          <Card
            className={css(styles.card)}
          >
          {header && (
            <CardHeader
              title={header}
            />
          )}

          {!header && people.map( (person) => {
            return (
              <CardHeader
                avatar={<AvatarComponent initial={person.initial} />}
                title={person.name}
              />
            )
          })}
          </Card>
        </Grid>
      </Grid>
    </>
  )
}

const styles = StyleSheet.create({
  card: {
    maxWidth: 345,
  },
  avatar: {
    backgroundColor: 'grey',
  }
})
