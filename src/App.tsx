/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import {useState} from 'react';
import {DetectiveDifficulty} from './components/detective/DetectiveDifficulty';
import {DetectiveCaseSelect} from './components/detective/DetectiveCaseSelect';
import {DetectiveDayStart} from './components/detective/DetectiveDayStart';
import {DetectiveAsk} from './components/detective/DetectiveAsk';
import {DetectiveExamine} from './components/detective/DetectiveExamine';
import {DetectiveTests} from './components/detective/DetectiveTests';
import {DetectiveDiagnose} from './components/detective/DetectiveDiagnose';
import {DetectiveResult} from './components/detective/DetectiveResult';

export default function App() {
  const [screen, setScreen] = useState('difficulty');

  return (
    <div className="font-body text-surface-on bg-surface min-h-screen">
      {screen === 'difficulty' && <DetectiveDifficulty onSelect={() => setScreen('caseSelect')} />}
      {screen === 'caseSelect' && <DetectiveCaseSelect onSelect={() => setScreen('dayStart')} />}
      {screen === 'dayStart' && <DetectiveDayStart />}
      {/* ... Add game loop switching ... */}
      {screen === 'ask' && <DetectiveAsk />}
      {screen === 'examine' && <DetectiveExamine />}
      {screen === 'tests' && <DetectiveTests />}
      {screen === 'diagnose' && <DetectiveDiagnose />}
      {screen === 'result' && <DetectiveResult />}
    </div>
  );
}

