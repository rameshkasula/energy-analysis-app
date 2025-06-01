"use client"

import React from 'react'
import dynamic from 'next/dynamic'
import PageContainer from '@/common/page-container'
const WorkspaceHome = dynamic(() => import('@/components/workspace/workspace-home'), { ssr: false })

export default function Workspace() {
  return (
    <PageContainer title="Workspace">
      <WorkspaceHome />
    </PageContainer>
  )
}
