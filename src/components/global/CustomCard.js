import { Card, CardContent } from '@mui/material'
import React from 'react'

function CustomCard({children, ...otherProps}) {
  return (
    <Card {...otherProps}>
        <CardContent>
            {children}
        </CardContent>
    </Card>
  )
}

export default CustomCard