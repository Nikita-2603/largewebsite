import './sample.css';
const Sample = () => {
    return <div className='sample1'>
        <div className='sample'>
            Sample blog post
        </div>
        <div className='date'>
            January 1, 2021 by <a href="mark.js">mark</a>
        </div>
        <div className='s-para'>

            This blog post shows a few different types of content that’s supported and styled with Bootstrap. Basic <br></br>typography, lists, tables, images, code, and more are all supported as expected.
        </div>
        <div className='s-para1'>
            This is some additional paragraph placeholder content. It has been written to fill the available space<br></br> and show how a longer snippet of text affects the surrounding content. We'll repeat it often to keep<br></br> the demonstration flowing, so be on the lookout for this exact same string of text.
        </div>
        <div className='sample'>
            Blockquotes
        </div>

        <div className='block'>
            This is an example blockquote in action:
        </div>
        <div className='quote'>
            Quoted text goes here.
        </div>
        <div className='s-para1'>
            This is some additional paragraph placeholder content. It has been written to fill the available space<br></br> and show how a longer snippet of text affects the surrounding content. We'll repeat it often to keep <br></br>the demonstration flowing, so be on the lookout for this exact same string of text.
        </div>
        <div className='sample'>
            Example lists
        </div>
        <div className='s-para1'>
            This is some additional paragraph placeholder content. It's a slightly shorter version of the other highly<br></br> repetitive body text used throughout. This is an example unordered list:
        </div>
        <div className='unorder'>
            <ul>
                <li>First list item</li>
                <li>Second list item with a longer description</li>
                <li>Third list item to close it out</li>
            </ul>
        </div>
        <div className='s-para1'>
            And this is an ordered list:
        </div>
        <div className='order'>
            <ol>
                <li>First list item</li>
                <li>Second list item with a longer description</li>
                <li>Third list item to close it out</li>
            </ol>
        </div>
        <div className='s-para1'>
            And this is a definition list:
        </div>
        <div className='html'>
            <div className='names'>
                HyperText Markup Language (HTML)
            </div>
            <div className='meaning'>
                The language used to describe and define the content of a Web page
            </div>
            <div className='names'>
                Cascading Style Sheets (CSS)
            </div>
            <div className='meaning'>
                Used to describe the appearance of Web content
            </div>
            <div className='names'>
                JavaScript (JS)
            </div>
            <div className='meaning'>
                The programming language used to build advanced Web sites and applications
            </div>
        </div>
        <div className='elements'>
            <div className='sample'>
                Inline HTML elements
            </div>
            <div className='s-para1'>
                HTML defines a long list of available inline tags, a complete list of which can be found on the <a href="mozilla.js"> Mozilla Developer Network.</a>
            </div>
            <div className='unorder'>
                <ul>
                    <li><strong>To bold text, use </strong></li>
                    <li><em>To italicize text, use</em> </li>
                    <li>Abbreviations, like <abbr>HTML</abbr> should use , with an optional title attribute for the full phrase.</li>
                    <li>Citations, like — <cite>Mark Otto,</cite> should use .</li>
                    <li><del>Deleted</del> text should use  and <ins>inserted</ins> text should use.</li>
                    <li><sup>Superscript text</sup>uses  and <sub>subscript text</sub> uses .</li>
                    <div className='s-para1'>
                        Most of these elements are styled by browsers with few modifications on our part.
                    </div>
                </ul>
            </div>
        </div>
        <div className='heading'>
            <div className='sample'>
                Heading
            </div>
            <div className='s-para1'>
                This is some additional paragraph placeholder content. It has been written to fill the available space and show how a longer snippet of text affects the surrounding content. We'll repeat it often to keep the demonstration flowing, so be on the lookout for this exact same string of text.
            </div>
            <div className='sample'>
                Sub-heading
            </div>
            <div className='s-para1'>
                This is some additional paragraph placeholder content. It has been written to fill the available space<br></br> and show how a longer snippet of text affects the surrounding content. We'll repeat it often to keep<br></br> the demonstration flowing, so be on the lookout for this exact same string of text.<br></br><br></br>
                Example code block<br></br><br></br>
                This is some additional paragraph placeholder content. It's a slightly shorter version of the other highly repetitive body text used throughout.

            </div>
        </div>
        <div className='blog'>
            <div className='bolgs'>
                Another blog post
            </div>
            <div className='date'>
                December 23, 2020 by <a href="Jacob.js">Jacob</a>
            </div>
            <div className='s-para1'>
                This is some additional paragraph placeholder content. It has been written to fill the available space<br></br> and show how a longer snippet of text affects the surrounding content. We'll repeat it often to keep<br></br> the demonstration flowing, so be on the lookout for this exact same string of text.
            </div>
            <div className='s-para1'>

                Longer quote goes here, maybe with some emphasized text in the middle of it.
            </div>
            <div className='s-para1'>
                This is some additional paragraph placeholder content. It has been written to fill the available space<br></br> and show how a longer snippet of text affects the surrounding content. We'll repeat it often to keep<br></br> the demonstration flowing, so be on the lookout for this exact same string of text.
            </div>
        </div>
        <div className='table'>
            <div className='sample'>
                Example table
            </div>
            <div className='s-para1'>
                And don't forget about tables in these posts:
            </div>
            <div className='tables'>
                <table>
                    <tr>
                        <th>Name</th>
                        <th>upvotes</th>
                        <th>Downvotes</th>
                    </tr>
                    <tr>
                        <td colSpan={10}>Alice</td>
                        <td>10</td>
                        <td>11</td>
                    </tr>
                    <tr>
                        <td colSpan={10}>Bobb</td>
                        <td>4</td>
                        <td>3</td>
                    </tr>
                    <tr>
                        <td colSpan={10}>charlie</td>
                        <td>7</td>
                        <td>9</td>
                    </tr>
                    <tr>
                        <td colSpan={10}>Totala</td>
                        <td>21</td>
                        <td>23</td>
                    </tr>
                </table>
                <div className='s-para1'>
                    This is some additional paragraph placeholder content. It's a slightly shorter version of the other highly<br></br> repetitive body text used throughout.
                </div>
            </div>


        </div>
        <div className='featues'>
            <div className='bolgs'>
                New feature
            </div>
            <div className='date'>
                December 14, 2020 by <a href="chris.js"> Chris</a>
            </div>
            <div className='s-para1'>
                This is some additional paragraph placeholder content. It has been written to fill the available space and show how a longer snippet of text affects the surrounding content. We'll repeat it often to keep the demonstration flowing, so be on the lookout for this exact same string of text.
            </div>
        </div>
        <div className='btn1'>
            <button type="button" className="btn btn-outline-primary">Older</button>
        </div>

    </div>
}
export default Sample;