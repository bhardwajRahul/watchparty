import React from 'react';
import { Modal, Button, Table } from 'semantic-ui-react';

export class FileShareModal extends React.Component<{
  beta: boolean;
  closeModal: () => void;
  startFileShare: (useMediaSoup: boolean) => void;
}> {
  render() {
    const { closeModal } = this.props;
    return (
      <Modal open={true} onClose={closeModal as any}>
        <Modal.Header>Share A File</Modal.Header>
        <Modal.Content image>
          <Modal.Description>
            <div>You're about to share a file from your device.</div>
            <ul>
              <li>This feature is only supported on Chrome and Edge.</li>
              <li>
                Certain codecs such as AC3 aren't supported in Chrome (they work
                in Edge due to licensing)
              </li>
            </ul>
            <Table definition unstackable striped celled>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell />
                  <Table.HeaderCell>WatchParty Free</Table.HeaderCell>
                  <Table.HeaderCell>WatchParty Plus</Table.HeaderCell>
                </Table.Row>
              </Table.Header>

              <Table.Body>
                <Table.Row>
                  <Table.Cell>Recommended Max Viewers</Table.Cell>
                  <Table.Cell>5</Table.Cell>
                  <Table.Cell>20</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>Recommended Upload Speed</Table.Cell>
                  <Table.Cell>5 Mbps per viewer</Table.Cell>
                  <Table.Cell>5 Mbps</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell></Table.Cell>
                  <Table.Cell>
                    <Button
                      onClick={() => {
                        this.props.startFileShare(false);
                        this.props.closeModal();
                      }}
                    >
                      Start Fileshare
                    </Button>
                  </Table.Cell>
                  <Table.Cell>
                    <Button
                      color="orange"
                      disabled={!this.props.beta}
                      onClick={() => {
                        this.props.startFileShare(true);
                        this.props.closeModal();
                      }}
                    >
                      {this.props.beta
                        ? 'Start Fileshare w/Relay'
                        : 'Coming soon'}
                    </Button>
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
          </Modal.Description>
        </Modal.Content>
      </Modal>
    );
  }
}
