import './index.css'

const TabItem = props => {
  const {tabDetails, updateTabId, isActive} = props
  const {displayText, tabId} = tabDetails

  const onClickTab = () => {
    updateTabId(tabId)
  }

  const activeClass = isActive ? 'active-tab-btn' : ''

  return (
    <li className="tab-item-container ">
      <button
        type="button"
        onClick={onClickTab}
        className={`tab-btn ${activeClass}`}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
