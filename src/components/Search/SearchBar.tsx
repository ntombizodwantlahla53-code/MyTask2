import { Text } from '../Text/Text'
import styles from './Search.module.css'

export interface SearchBarProps{
    searchQuery : string
    onSearch : (newValue: string)=> void

}

export const Searchbar: React.FC<SearchBarProps> = ({searchQuery, onSearch}) => {
    
    return (
    
    <div className={styles.searching}>
        <Text variant= {'span'}>Search </Text>
        <input type = 'text' className ={styles.input} value={searchQuery} onChange={(e)=> {
            onSearch(e.target.value)
            }} />
           
            </div>
)
}