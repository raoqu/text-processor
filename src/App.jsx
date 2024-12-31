import { useState, useEffect } from 'react'
import { AppShell, Button, Textarea, Checkbox, Paper, Text } from '@mantine/core'
import { Sidebar } from './components/Sidebar'
import { processors } from './processors'
import './App.css'

function App() {
  const [inputText, setInputText] = useState('')
  const [outputText, setOutputText] = useState('')
  const [selectedProcessor, setSelectedProcessor] = useState('uppercase')
  const [autoProcess, setAutoProcess] = useState(false)

  const handleProcess = () => {
    const processor = processors[selectedProcessor]
    if (processor) {
      setOutputText(processor.process(inputText))
    }
  }

  useEffect(() => {
    if (autoProcess) {
      handleProcess()
    }
  }, [inputText, selectedProcessor, autoProcess])

  return (
    <AppShell
      navbar={{ width: 200, breakpoint: 'sm' }}
      padding={0}
      styles={{
        main: {
          width: '100%',
          minWidth: '800px',
          overflow: 'auto'
        },
        root: {
          minWidth: '1000px'  // 200px navbar + 800px main
        }
      }}
    >
      <AppShell.Navbar>
        <Sidebar 
          onProcessorSelect={setSelectedProcessor} 
          selectedProcessor={selectedProcessor}
        />
      </AppShell.Navbar>

      <AppShell.Main>
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column',
          height: '100vh',
          padding: '20px',
          gap: '20px'
        }}>
          <Paper 
            shadow="xs" 
            p="md"
            style={{
              backgroundColor: '#f8f9fa'
            }}
          >
            <Text size="xl" weight={500} style={{ marginBottom: '10px' }}>
              {processors[selectedProcessor].name}
            </Text>
            <Text>
              {processors[selectedProcessor].description}
            </Text>
          </Paper>

          <div style={{ 
            display: 'flex', 
            gap: '1rem', 
            flex: 1
          }}>
            <Textarea
              placeholder="Enter text here..."
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              styles={{
                root: { flex: 1, minWidth: '300px' },
                wrapper: { height: '100%' },
                input: { height: '100%', minHeight: '100%' }
              }}
            />
            
            <div style={{ 
              display: 'flex', 
              flexDirection: 'column',
              alignItems: 'center',
              padding: '0 10px',
              minWidth: '100px',
              gap: '10px',
              justifyContent: 'center'
            }}>
              <Checkbox
                label="Auto Process"
                checked={autoProcess}
                onChange={(event) => setAutoProcess(event.currentTarget.checked)}
              />
              <Button onClick={handleProcess}>
                Process →
              </Button>
            </div>

            <Textarea
              placeholder="Output will appear here..."
              value={outputText}
              readOnly
              styles={{
                root: { flex: 1, minWidth: '300px' },
                wrapper: { height: '100%' },
                input: { height: '100%', minHeight: '100%' }
              }}
            />
          </div>
        </div>
      </AppShell.Main>
    </AppShell>
  )
}

export default App
